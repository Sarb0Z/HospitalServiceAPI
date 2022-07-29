using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using HospitalServiceAPI.Models;
using Newtonsoft.Json;
using HospitalServiceAPI.Utilities;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"exec GET_FROM_PATIENT";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);
        }
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"Select id, patient_name, cnic, dob from dbo.Patient where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            //string query = @"Select id, patient_name, cnic, dob from dbo.Patient where id = " + id;

            //ServerConnect newCon = new ServerConnect(_configuration);

            //return newCon.GetDataWithParam(query, sql);

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HospitalAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.Add("@id", SqlDbType.Int);
                    myCommand.Parameters["@id"].Value = id;

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            string temp = JsonConvert.SerializeObject(table);
            return new JsonResult(temp);

        }

        [HttpGet("GetByName")]
        public JsonResult Get(string? name, string? cnic)
        {
            //SqlParameter[] sql = new SqlParameter[1];
            //int i = 0;
            //sql[i++] = new SqlParameter("@id", SqlDbType.Int, id);
            string query = @"exec GET_FROM_PATIENT_WITH_NAME_OR_CNIC ";
            if (name != null && cnic != null)
                query += "@name, @cnic";
            else if (cnic != null)
                query += "@cnic";
            else if (name != null)
                query += "@name";
          

            //string query = @"Select id, patient_name, cnic, dob from dbo.Patient where id = " + id;

            //ServerConnect newCon = new ServerConnect(_configuration);

            //return newCon.GetDataWithParam(query, sql);

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HospitalAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    if (name != null)
                    {
                        myCommand.Parameters.Add("@name", SqlDbType.VarChar);
                        myCommand.Parameters["@name"].Value = name;
                    }
                    if (cnic != null)
                    {
                        myCommand.Parameters.Add("@cnic", SqlDbType.VarChar);
                        myCommand.Parameters["@cnic"].Value = cnic;
                    }


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            string temp = JsonConvert.SerializeObject(table);
            return new JsonResult(temp);

        }

        [HttpPost]
        public JsonResult Post(Patient objPatient)
        {
            string sqlFormattedDate = objPatient.dob.ToString("yyyy-MM-dd HH:mm:ss.fff");
            string query = @"Insert into dbo.Patient values
                ('" + objPatient.patient_name + "','" + objPatient.cnic + "','" + sqlFormattedDate + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Patient objPatient)
        {
            string sqlFormattedDate = objPatient.dob.ToString("yyyy-MM-dd HH:mm:ss.fff");
            string query = @"Update dbo.Patient set
                patient_name = '" + objPatient.patient_name + @"',
                cnic='" + objPatient.cnic + @"',
                dob='" + sqlFormattedDate + "' where id = " + objPatient.id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Patient where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Deleted Successfully");
        }

    }
}

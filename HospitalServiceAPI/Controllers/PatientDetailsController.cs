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
    public class PatientDetailsController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientDetailsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get(int id)
        {
            string query = @"Select details_id, patient_id, blood_type, bone_density from dbo.patient_details where patient_id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetJsonData(query);
        }

        [HttpPost]
        public JsonResult Post(PatientDetails objPatientDetails)
        {
            string query = @"Insert into dbo.patient_details values
                ('" + objPatientDetails.patient_id +"','" + objPatientDetails.blood_type + "','" + objPatientDetails.bone_density + "')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HospitalAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(PatientDetails objPatientDetails)
        {
            string query = @"Update dbo.patient_details set
                patient_id = '" + objPatientDetails.patient_id + @"',
                blood_type='" + objPatientDetails.blood_type + @"',
                bone_density='" + objPatientDetails.bone_density + "' where details_id = " + objPatientDetails.details_id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.patient_details where details_id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Deleted Successfully");
        }
    }
}

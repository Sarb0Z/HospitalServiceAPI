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

            return newCon.GetData(query);
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

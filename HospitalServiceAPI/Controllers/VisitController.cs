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
    public class VisitController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        public VisitController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select id, timing, purpose, patient_id, doctor_id from dbo.Visit";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);

        }

        [HttpPost]
        public JsonResult Post(Visit objVisit)
        {
            string sqlFormattedDate = objVisit.timing.ToString("yyyy-MM-dd HH:mm:ss.fff");

            string query = @"Insert into dbo.Visit values
                ('" + sqlFormattedDate + "','" + objVisit.purpose + "','" + objVisit.patient_id + "','" + objVisit.doctor_id + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Visit objVisit)
        {
            string sqlFormattedDate = objVisit.timing.ToString("yyyy-MM-dd HH:mm:ss.fff");

            string query = @"Update dbo.Visit set
                timing = '" + sqlFormattedDate + @"',
                purpose='" + objVisit.purpose + @"',
                patient_id='" + objVisit.patient_id + @"',
                doctor_id='" + objVisit.doctor_id + "' where id = " + objVisit.id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Visit where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Deleted Successfully");
        }
    }
}

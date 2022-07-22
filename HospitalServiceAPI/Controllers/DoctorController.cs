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
using System.Text.Json;
using Newtonsoft.Json;
using HospitalServiceAPI.Utilities;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DoctorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select id, doctor_name, title from dbo.Doctor";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);

        }


        [HttpPost]
        public JsonResult Post(Doctor objDoctor)
        {
            string query = @"Insert into dbo.Doctor values
                ('" + objDoctor.doctor_name + "','" + objDoctor.title + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Doctor objDoctor)
        {
            string query = @"Update dbo.Doctor set
                doctor_name = '" + objDoctor.doctor_name + @"',
                title='" + objDoctor.title + "' where id = " + objDoctor.id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Doctor where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetData(query);

            return new JsonResult("Deleted Successfully");
        }

    }
}

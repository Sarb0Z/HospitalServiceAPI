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
using Microsoft.AspNetCore.Authorization;

namespace HospitalServiceAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController:ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }



        [HttpPost]
        public JsonResult Post(User objUser)
        {
            string sqlFormattedDate = objUser.date_created.ToString("yyyy-MM-dd HH:mm:ss.fff");

            string query = @"Insert into dbo._user values
                ('" + objUser.username + "','" + objUser.cnic + "','" + sqlFormattedDate + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(User objUser)
        {
            string query = @"Update dbo._user set
                username = '" + objUser.username + @"',
                cnic='" + objUser.cnic + @"',
                date_created='" + objUser.date_created + "' where id = " + objUser.id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo._user where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Deleted Successfully");
        }





    }
}

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
using Microsoft.AspNetCore.Authorization;

namespace HospitalServiceAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class LoggingController:ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LoggingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"exec GET_FROM_LOGS";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetJsonData(query);

        }

        [HttpPost]
        public JsonResult Post(logs objLog)
        {
            string sqlFormattedDate = objLog.log_datetime.ToString("yyyy-MM-dd HH:mm:ss.fff");

            string query = @"Insert into dbo._logs values
                ('" + objLog.log_text + "','" + sqlFormattedDate + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Added Successfully");
        }

        
    }
}

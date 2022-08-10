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
    public class PatientDiagnosisController:ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientDiagnosisController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get(string cnic)
        {
            string query = @"Select patient_name, cnic, dob, timing, purpose, result, doctor_name from dbo.patient_diagnosis where cnic = '" + cnic + "'";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetJsonData(query);

        }
    }
}

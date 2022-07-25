﻿using HospitalServiceAPI.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientPrescriptionController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PatientPrescriptionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get(string cnic)
        {
            string query = @"select cnic, patient_name, doctor_name, medicine_name, supplier_name, recommendation, intake_amount from dbo.patient_prescription where cnic = '" + cnic + "'";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);

        }
    }
}
using HospitalServiceAPI.Models;
using HospitalServiceAPI.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalServiceAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PrescriptionController:ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PrescriptionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult Post(Prescription objPrescription)
        {
            string query = @"Insert into dbo.Prescription values
                ('" + objPrescription.patient_id + "','" + objPrescription.medicine_id + "','" + objPrescription.recommendation + "','" + objPrescription.intake_amount + "','" + objPrescription.doctor_id + "')";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Prescription objPrescription)
        {
            string query = @"Update dbo.prescription set
                patient_id = '" + objPrescription.patient_id + @"',
                doctor_id='" + objPrescription.doctor_id + @"',
                medicine_id='" + objPrescription.medicine_id + @"',
                recommendation='" + objPrescription.recommendation + @"',
                intake_amount='" + objPrescription.intake_amount + "' where id = " + objPrescription.id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.prescription where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Deleted Successfully");
        }
    }
}

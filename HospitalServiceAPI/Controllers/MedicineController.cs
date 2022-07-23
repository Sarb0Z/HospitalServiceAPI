using HospitalServiceAPI.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController
    {
        private readonly IConfiguration _configuration;
        public MedicineController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select id, medicine_name, supplier_name, price  from dbo.medicines";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);
        }
    }
}

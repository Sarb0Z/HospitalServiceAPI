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
            string query = @"exec GET_MEDICINE";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);
        }
    }
}

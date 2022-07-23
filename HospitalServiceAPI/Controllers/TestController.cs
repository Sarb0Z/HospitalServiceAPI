using HospitalServiceAPI.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        public TestController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select id, test_name, test_description, price  from dbo.tests";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetData(query);
        }
    }
}

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
using Microsoft.AspNetCore.DataProtection;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PasswordController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IDataProtectionProvider _provider;
        public PasswordController(IConfiguration configuration, IDataProtectionProvider provider)
        {
            _configuration = configuration;
            _provider = provider;
        }
        [HttpGet]
        public JsonResult Get(int id)
        {
            string query = @"Select _password from dbo._passwords where
                id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);
            string data=JsonConvert.SerializeObject(newCon.GetData(query));
            var result = JsonConvert.DeserializeObject<dynamic>(data);
            Encryption _encryptor = new Encryption(_provider);
            string DResult = _encryptor.DecryptPassword(result.Value._password);
            return newCon.GetData(query);

            //query = @"exec ADD_ENCRYPTION";
            //newCon.GetData(query);

        }

        [HttpPost]
        public JsonResult Post(Passwords objPassword)
        {
            string query = @"exec POST_TO_PASSWORD @id, @password";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HospitalAppCon");
            SqlDataReader myReader;
            Encryption _encryptor = new Encryption(_provider);
            string password = objPassword._password;
            password = _encryptor.EncryptPassword(password);

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
 
                    myCommand.Parameters.Add("@id", SqlDbType.Int);
                    myCommand.Parameters["@id"].Value = objPassword.id;
 
                    myCommand.Parameters.Add("@password", SqlDbType.VarChar);
                    myCommand.Parameters["@password"].Value = password;
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            //query = @"exec ADD_ENCRYPTION";
            //ServerConnect newCon = new ServerConnect(_configuration);

            //newCon.GetData(query);

            return new JsonResult("Added Successfully");

            
        }

        [HttpPut]
        public JsonResult Put(Passwords objPassword)
        {
            string query = @"Update dbo._passwords set
                _password = '" + objPassword._password + "' where id = " + objPassword.id;


            ServerConnect newCon = new ServerConnect(_configuration);
            newCon.GetData(query);

            //query = @"exec ADD_ENCRYPTION";
            //newCon.GetData(query);

            return new JsonResult("Updated Successfully");
        }
    }
}

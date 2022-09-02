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
using Microsoft.AspNetCore.DataProtection;

namespace HospitalServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        //private readonly IDataProtector _protector;

        public LoginController(IConfiguration configuration/*, IDataProtectionProvider provider*/)
        {
            _configuration = configuration;
            //_protector = provider.CreateProtector(GetType().FullName);
        }

        [HttpPost]
        public JsonResult Post(Login objLogin)
        {
            //Encryption encryptor = new Encryption(_protector);
            //string encrypted_password = encryptor.EncryptPassword(objLogin.password);

            //string decrypted_password = encryptor.DecryptPassword(ecrypted_password);

            string query = @"Insert into dbo._login values
                (" + objLogin.id + ",'" + objLogin.email_id + "',CONVERT(varbinary,'" + objLogin.password + "'), null, GETDATE())";
            ServerConnect newCon = new ServerConnect(_configuration);

            string reference = @"Select * from dbo._user where id = " + objLogin.id;

            DataTable userData = newCon.GetTableData(reference);
            if ( userData != null && userData.Rows.Count > 0)
            {
                if (userData.Rows[0]["email_id"].ToString() == objLogin.email_id)
                {
                    newCon.GetJsonData(query);
                    return new JsonResult("Added Successfully");

                }
                else
                {
                    return new JsonResult("Email ID incorrect.");
                }
            }
            return new JsonResult("ID not found");

        }

        [Authorize]
        [HttpPut]
        public JsonResult Put(Login objLogin)
        {
            //Encryption encryptor = new Encryption(_protector);
            //string encrypted_password = encryptor.EncryptPassword(objLogin.password);

            string query = @"Update dbo._login set
                email_id = '" + objLogin.email_id + @"',
                _password='" + objLogin.password + "' where id = ''" + objLogin.id + "'";
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Updated Successfully");
        }
        [Authorize]
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo._login where id = " + id;
            ServerConnect newCon = new ServerConnect(_configuration);

            newCon.GetJsonData(query);

            return new JsonResult("Deleted Successfully");
        }
    }
}

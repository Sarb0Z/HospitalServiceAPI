using HospitalServiceAPI.Models;
using HospitalServiceAPI.Repositories;
using HospitalServiceAPI.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HospitalServiceAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        //private readonly JWTManagerRepository _jWTManager;
        public TokenController(IConfiguration configuration)
        {
            _configuration = configuration;
            //_jWTManager = jWTManager;
        }

        [HttpPost]
        public async Task<Token> Post(Login _userData)
        {
            if (_userData != null && _userData.email_id != null && _userData.password != null)
            {
                DataTable user = GetUser(_userData.email_id, _userData.password);

                if (user != null && user.Rows.Count > 0)
                {
                    string userID = user.Rows[0]["id"].ToString();
                    //create claims details based on the user information
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("UserId", userID),
                        new Claim("Email", _userData.email_id)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(20),
                        signingCredentials: signIn);

                    return new Token { 
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiry= DateTime.UtcNow.AddMinutes(20),
                        userID=userID
                    };
                }
                else
                {
                    //return BadRequest("Invalid credentials");
                    return null;
                }
            }
            else
            {
                //return BadRequest();
                return null;
            }
        }

        private DataTable GetUser(string email_id, string password)
        {
            string query = @"Select id, email_id, _password, date_modified from dbo._login where email_id = '" + email_id + "' and _password = '" + password + "'";
            ServerConnect newCon = new ServerConnect(_configuration);

            return newCon.GetTableData(query);

        }

        //private async Task<UserInfo> GetUser(string email, string password)
        //{
        //    return await _context.UserInfos.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        //}

        //[HttpPost]
        //[Route("authenticate")]
        //public IActionResult Authenticate(Login usersdata)
        //{
        //    var token = _jWTManager.Authenticate(usersdata);

        //    if (token == null)
        //    {
        //        return Unauthorized();
        //    }

        //    return Ok(token);
        //}

    }
}

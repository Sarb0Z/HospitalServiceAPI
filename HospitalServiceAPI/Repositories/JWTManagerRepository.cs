using HospitalServiceAPI.Interfaces;
using HospitalServiceAPI.Models;
using HospitalServiceAPI.Utilities;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HospitalServiceAPI.Repositories
{
    public class JWTManagerRepository: IJWTManagerRepository
    {
		private readonly IConfiguration _configuration;
		public JWTManagerRepository(IConfiguration configuration)
		{
			_configuration = configuration;
		}
		public Token Authenticate(Login userData)
		{
			string query = @"Select id, email_id, _password, date_modified from dbo._login where email_id = '" + userData.email_id + "' and _password = '" + userData.password + "'";
			ServerConnect newCon = new ServerConnect(_configuration);
			DataTable user = newCon.GetTableData(query);
			string? userID = user.Rows[0]["id"].ToString();


			// Else we generate JSON Web Token
			//var tokenHandler = new JwtSecurityTokenHandler();
			//var tokenKey = Encoding.UTF8.GetBytes(_configuration["JWT:Key"]);
			//var tokenDescriptor = new SecurityTokenDescriptor
			//{
			//	Subject = new ClaimsIdentity(new Claim[]
			//  {
			// new Claim(ClaimTypes.Name, user)
			//  }),
			//	Expires = DateTime.UtcNow.AddMinutes(20),
			//	SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
			//};
			//var token = tokenHandler.CreateToken(tokenDescriptor);
			//return new Tokens { Token = tokenHandler.WriteToken(token) };

			if (userID == null)
            {
				return null;
			}
			var claims = new[] {
						new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
						new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
						new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
						new Claim("UserId", userID),
					};

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
			var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var tokenHandler = new JwtSecurityTokenHandler();
			var token = new JwtSecurityToken(
				_configuration["Jwt:Issuer"],
				_configuration["Jwt:Audience"],
				claims,
				expires: DateTime.UtcNow.AddMinutes(20),
				signingCredentials: signIn);
			return new Token { token = tokenHandler.WriteToken(token) };

		}


    }

}

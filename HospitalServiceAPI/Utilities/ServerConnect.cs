﻿using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;


namespace HospitalServiceAPI.Utilities
{
    public class ServerConnect
    {
        private DataTable table;
        private string sqlDataSource;
        public ServerConnect(IConfiguration _configuration)
        {
            table = new DataTable();
            sqlDataSource = _configuration.GetConnectionString("HospitalAppCon");

        }
        public JsonResult GetData(string query)
        {
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(this.sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            string temp = JsonConvert.SerializeObject(table);

            return new JsonResult(temp);

        }
       
            
    }
}

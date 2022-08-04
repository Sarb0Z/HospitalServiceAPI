using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using System.Data.Common;

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
        public JsonResult GetJsonData(string query)
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

        public DataTable GetTableData(string query)
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

            return table;

        }



        public JsonResult GetDataWithParam(string query, SqlParameter[] param)
        {
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(this.sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    foreach (SqlParameter parameter in param)
                    {
                        myCommand.Parameters.AddWithValue(query, parameter);
                    }
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

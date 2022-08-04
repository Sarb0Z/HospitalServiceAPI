﻿namespace HospitalServiceAPI.Models
{
    public class User
    {
        public int id { get; set; } = 0;
        public string user_name { get;set; }=string.Empty;
        public string email_id { get; set; }=string.Empty;
        public string cnic { get; set; } = string.Empty;
        public DateTime date_created { get; set; }=DateTime.Now;
    }
}
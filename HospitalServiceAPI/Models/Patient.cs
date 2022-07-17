using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace HospitalServiceAPI.Models
{
    public class Patient
    {
        public int id { get; set; }
        public string? patient_name { get; set; }
        public string? cnic { get; set; }
        public DateTime dob { get; set; }

    }
}

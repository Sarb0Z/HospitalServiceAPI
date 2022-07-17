namespace HospitalServiceAPI.Models
{
    public class Visit
    {
        public int id { get; set; }
        public DateTime timing { get; set; }
        public string? purpose { get; set; }
        public int patient_id { get; set; }
        public int doctor_id { get; set; }
    }
}

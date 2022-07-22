namespace HospitalServiceAPI.Models
{
    public class VisitPage
    {
        public int id { get; set; }
        public string? patient_name { get; set; }
        public string? doctor_name { get; set; }
        public DateTime timing { get; set; }
        public string? purpose { get; set; }
    }
}

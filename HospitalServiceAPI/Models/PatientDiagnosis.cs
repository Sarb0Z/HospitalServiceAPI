namespace HospitalServiceAPI.Models
{
    public class PatientDiagnosis
    {
        public string? patient_name { get; set; }
        public string? cnic { get; set; }
        public DateTime dob { get; set; }
        public DateTime? timing { get; set; }
        public string? purpose { get; set; }
        public string? detail { get; set; }
        public string? doctor_name { get; set; }
    }
}

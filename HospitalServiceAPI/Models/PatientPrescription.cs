namespace HospitalServiceAPI.Models
{
    public class PatientPrescription
    {
        public int id { get; set; } 
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public string MedicineName { get; set; } = string.Empty;
        public string SupplierName { get; set; } = string.Empty;
        public string Recommendation { get; set; }=string.Empty;
        public float IntakeAmount { get; set; } 

    }
}

namespace HospitalServiceAPI.Models
{
    public class PatientDetails
    {
        public int patient_id { get; set; }
        public int? doctor_id { get; set; }
        public string? blood_type { get; set; }
        public float? bone_density { get; set; }
        public int? no_of_visits { get; set; }
    }
}

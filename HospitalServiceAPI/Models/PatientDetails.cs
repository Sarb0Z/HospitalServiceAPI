namespace HospitalServiceAPI.Models
{
    public class PatientDetails
    {
        public int details_id { get; set; } 
        public int patient_id { get; set; }
        public string? blood_type { get; set; }
        public float? bone_density { get; set; }
    }
}

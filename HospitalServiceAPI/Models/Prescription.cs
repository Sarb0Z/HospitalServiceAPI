namespace HospitalServiceAPI.Models
{
    public class Prescription
    {
        public int id { get; set; }
        public int patient_id { get; set; }
        public int doctor_id { get; set; }
        public int medicine_id { get; set; }
        public string recommendation { get; set; } = "No recommendation.";
        public int intake_amount { get; set; }
    }
}

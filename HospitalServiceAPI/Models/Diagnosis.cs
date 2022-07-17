namespace HospitalServiceAPI.Models
{
    public class Diagnosis
    {
        public int id { get; set; }
        public int doctor { get; set; }
        public int visit { get; set; }
        public string? result {  get; set; }

    }
}

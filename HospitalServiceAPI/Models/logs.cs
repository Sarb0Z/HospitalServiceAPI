namespace HospitalServiceAPI.Models
{
    public class logs
    {
        public int id { get; set; } = 0;
        public string log_text { get; set; }=String.Empty;
        public DateTime log_datetime { get; set; }=DateTime.Now;
    }
}

namespace HospitalServiceAPI.Models
{
    public class Login
    {
        public int id { get; set; }
        public string email_id { get; set; }=String.Empty;
        public string password { get; set; }=String.Empty;
        public DateTime ModifiedDate { get; set; }
    }
}

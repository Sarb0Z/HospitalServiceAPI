namespace HospitalServiceAPI.Models
{
    public class Token
    {
        public string token { get; set; }=String.Empty;
        public DateTime expiry { get; set; }
        public string userID { get; set; }=String.Empty;

    }
}

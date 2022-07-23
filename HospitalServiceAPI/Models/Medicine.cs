namespace HospitalServiceAPI.Models
{
    public class Medicine
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string SupplierName { get; set; } = String.Empty ;
        public float Pirce { get; set; }

    }
}

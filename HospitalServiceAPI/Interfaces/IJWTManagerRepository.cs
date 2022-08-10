using HospitalServiceAPI.Models;

namespace HospitalServiceAPI.Interfaces
{
    public interface IJWTManagerRepository
    {
        Token Authenticate(Login userData);
    }
}

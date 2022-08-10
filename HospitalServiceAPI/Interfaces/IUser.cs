using HospitalServiceAPI.Models;

namespace HospitalServiceAPI.Interfaces
{
    public interface IUser
    {
        public User GetUserDetails(string email_id);
        public void AddUser(User objUser);
        public void UpdateUser(User objUser);
        public User DeleteUser(int id);
    }
}

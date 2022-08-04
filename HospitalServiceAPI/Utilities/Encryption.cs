using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace HospitalServiceAPI.Utilities
{
    public class Encryption
    {
        private readonly IDataProtector _protector;

        public Encryption(IDataProtectionProvider provider)
        {
            _protector = provider.CreateProtector("sdkjfnlkfnladk");
        }
        public string EncryptPassword(string result)
        {
            string encryptedResult = _protector.Protect(result);
            return encryptedResult;
            
        }
        public string DecryptPassword(string encryptedResult)
        {
            string decryptedResult = _protector.Unprotect(encryptedResult);
            return decryptedResult;
        }

    }
}

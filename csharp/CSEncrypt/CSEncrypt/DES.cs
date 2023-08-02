using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace CSEncrypt
{
    //Symmetric algorithms
    //Data Encryption Standard
    //Uses same secret for encryption and decryption
    // uses 56 bits of key for encryption
    //key length must be of 8 characters
    internal class DES
    {
        public static string Encrypt(string plainText, string secretKey)
        {
            if(secretKey.Length != 8)
            {
                throw new Exception("Key length must be of 8 characters");
            }
            else
            {
                var secretKeyArray = Encoding.UTF8.GetBytes(secretKey);
                var ivArray = Encoding.UTF8.GetBytes(secretKey);
                using (DSACryptoServiceProvider provider = new DSACryptoServiceProvider())
                {
                    //provider.key 
                }
            }
            return "";
        }
    }
}

const crypto = require('crypto');

function hashPasswordWithoutSalt(password) {
  // Apply the hash function (SHA-256 in this example)
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  return hashedPassword;
}

const passwordWithoutSalt = "mysecretpassword";
const hashedPasswordWithoutSalt = hashPasswordWithoutSalt(passwordWithoutSalt);
console.log("Hashed Password (without salt):", hashedPasswordWithoutSalt);

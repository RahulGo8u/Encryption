const crypto = require('crypto');

function generateSalt() {
  // Generate a random 16-byte salt
  return crypto.randomBytes(16).toString('hex');
}

function hashPasswordWithSalt(password, salt) {
  // Combine the salt and password
  const saltedPassword = salt + password;

  // Apply the hash function (SHA-256 in this example)
  const hashedPassword = crypto.createHash('sha256').update(saltedPassword).digest('hex');
  return hashedPassword;
}

const passwordWithSalt = "mysecretpassword";
const salt = generateSalt();
const hashedPasswordWithSalt = hashPasswordWithSalt(passwordWithSalt, salt);

console.log("Salt:", salt);
console.log("Hashed Password (with salt):", hashedPasswordWithSalt);

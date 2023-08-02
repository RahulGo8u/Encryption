const crypto = require('crypto');

// Example data to encrypt
const plaintextData = "Hello, this is a secret message.";

// Secret key (AES supports key lengths of 128, 192, or 256 bits)
const aesKey128 = crypto.randomBytes(16); // 128 bits (16 bytes)
const aesKey192 = crypto.randomBytes(24); // 192 bits (24 bytes)
const aesKey256 = crypto.randomBytes(32); // 256 bits (32 bytes)

// Encryption using AES with different key lengths
function encryptWithAES(data, key) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, crypto.randomBytes(16));
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

// Decryption using AES with different key lengths
function decryptWithAES(encryptedData, key) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(encryptedData.iv, 'hex'));
  let decryptedData = decipher.update(encryptedData.encryptedData, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
  return decryptedData;
}

// Encryption and Decryption using AES with different key lengths
const encryptedData128 = encryptWithAES(plaintextData, aesKey128);
const decryptedData128 = decryptWithAES(encryptedData128, aesKey128);
console.log("Encrypted Data (AES 128):", encryptedData128);
console.log("Decrypted Data (AES 128):", decryptedData128);

const encryptedData192 = encryptWithAES(plaintextData, aesKey192);
const decryptedData192 = decryptWithAES(encryptedData192, aesKey192);
console.log("Encrypted Data (AES 192):", encryptedData192);
console.log("Decrypted Data (AES 192):", decryptedData192);

const encryptedData256 = encryptWithAES(plaintextData, aesKey256);
const decryptedData256 = decryptWithAES(encryptedData256, aesKey256);
console.log("Encrypted Data (AES 256):", encryptedData256);
console.log("Decrypted Data (AES 256):", decryptedData256);

const crypto = require('crypto');

// Example data to encrypt
const plaintextData = "Hello, this is a secret message.";

// Secret key (must be exactly 8 bytes long for DES)
const desKey = Buffer.from('0123456789ABCDEF', 'hex');

// Encryption using DES
const cipher = crypto.createCipheriv('des-ecb', desKey, null);
let encryptedData = cipher.update(plaintextData, 'utf-8', 'hex');
encryptedData += cipher.final('hex');

console.log("Encrypted Data (DES):", encryptedData);

// Decryption using DES
const decipher = crypto.createDecipheriv('des-ecb', desKey, null);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
decryptedData += decipher.final('utf-8');

console.log("Decrypted Data (DES):", decryptedData);

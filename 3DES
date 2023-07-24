const crypto = require('crypto');

// Example data to encrypt
const plaintextData = "Hello, this is a secret message.";

// Secret key for 3DES (must be exactly 24 bytes long)
const tripleDesKey = crypto.randomBytes(24); // 192 bits (24 bytes)

// Encryption using 3DES
const cipher3DES = crypto.createCipheriv('des-ede3', tripleDesKey, null);
let encryptedData3DES = cipher3DES.update(plaintextData, 'utf-8', 'hex');
encryptedData3DES += cipher3DES.final('hex');

console.log("Encrypted Data (3DES):", encryptedData3DES);

// Decryption using 3DES
const decipher3DES = crypto.createDecipheriv('des-ede3', tripleDesKey, null);
let decryptedData3DES = decipher3DES.update(encryptedData3DES, 'hex', 'utf-8');
decryptedData3DES += decipher3DES.final('utf-8');

console.log("Decrypted Data (3DES):", decryptedData3DES);

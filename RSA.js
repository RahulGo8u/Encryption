const crypto = require('crypto');

// Generate RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048, // Key length in bits
});

// Example data to encrypt
const plaintextData = "Hello, this is a secret message.";

// Encryption using RSA public key
const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(plaintextData, 'utf-8')).toString('base64');
console.log("Encrypted Data (RSA):", encryptedData);

// Decryption using RSA private key
const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64')).toString('utf-8');
console.log("Decrypted Data (RSA):", decryptedData);

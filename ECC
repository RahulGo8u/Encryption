const crypto = require('crypto');

// Generate ECC key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
  namedCurve: 'secp256k1', // Named curve for ECC (commonly used for Bitcoin)
});

// Example data to encrypt
const plaintextData = "Hello, this is a secret message.";

// Encryption using ECC public key
const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(plaintextData, 'utf-8')).toString('base64');
console.log("Encrypted Data (ECC):", encryptedData);

// Decryption using ECC private key
const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64')).toString('utf-8');
console.log("Decrypted Data (ECC):", decryptedData);

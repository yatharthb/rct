import forge from "node-forge";
import JSBI from "jsbi";

export const generateDiffieHellmanKeys = async () => {
  const p = await new Promise((resolve) => {
    forge.prime.generateProbablePrime(256, (err, num) => {
      if (err) throw err;
      resolve(JSBI.BigInt(`0x${num.toString(16)}`));
    });
  });

  const g = JSBI.BigInt(2); // Use 2 as a common generator

  // Generate a random private key with 256 bits
  const privateKey = JSBI.BigInt(`0x${forge.util.createBuffer(forge.random.getBytes(32)).toHex()}`);
  const publicKey = JSBI.remainder(JSBI.exponentiate(g, privateKey), p);

  return {
    publicKey,
    privateKey,
    parameters: { p, g },
  };
};


export const generateSharedSecret = (otherPartyPublicKey, privateKey, p, g) => {
  return JSBI.remainder(JSBI.exponentiate(JSBI.BigInt(otherPartyPublicKey), privateKey), p);
};

export async function generateRSAKeys() {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );

  const publicKeyJwk = await window.crypto.subtle.exportKey("jwk", keyPair.publicKey);
  const privateKeyJwk = await window.crypto.subtle.exportKey("jwk", keyPair.privateKey);

  return {
    publicKey: publicKeyJwk,
    privateKey: privateKeyJwk,
  };
}


export async function rsaEncrypt(publicKeyJwk, message) {
  const publicKey = await window.crypto.subtle.importKey(
    "jwk",
    publicKeyJwk,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );

  const encodedMessage = new TextEncoder().encode(message);
  const encryptedMessage = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encodedMessage
  );

  return new Uint8Array(encryptedMessage);
}

export async function rsaDecrypt(privateKeyJwk, encryptedMessage) {
  const privateKey = await window.crypto.subtle.importKey(
    "jwk",
    privateKeyJwk,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["decrypt"]
  );

  const decryptedMessage = await window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP",
    },
    privateKey,
    encryptedMessage
  );

  return new TextDecoder().decode(new Uint8Array(decryptedMessage));
}

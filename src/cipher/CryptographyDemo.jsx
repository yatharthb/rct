import React, { useState } from 'react';
import { generateRSAKeys, rsaEncrypt, rsaDecrypt } from './cryptoFunctions';
import styles from './CryptographyDemo.module.css';
import forge from 'node-forge';

const CryptographyDemo = () => {
  // Caesar Cipher related states and functions
  // ...

  // RSA Encryption related states and functions
  const [rsaKeys, setRsaKeys] = useState(null);
  const [rsaMessage, setRsaMessage] = useState('');
  const [rsaEncrypted, setRsaEncrypted] = useState(null);
  const [rsaDecrypted, setRsaDecrypted] = useState('');

  const handleGenerateKeys = async () => {
  try {
    const keys = await generateRSAKeys();
    setRsaKeys(keys);
  } catch (error) {
    console.error('Error generating RSA keys:', error);
  }
};

  const handleRsaEncrypt = async () => {
  if (rsaMessage && rsaKeys) {
    const encrypted = await rsaEncrypt(rsaKeys.publicKey, rsaMessage);
    setRsaEncrypted(encrypted);
  }
};

const handleRsaDecrypt = async () => {
  if (rsaEncrypted && rsaKeys) {
    const decrypted = await rsaDecrypt(rsaKeys.privateKey, rsaEncrypted);
    setRsaDecrypted(decrypted);
  }
};

  // History section content
  // ...

  // Art section content
  // ...

  // Philosophy section content
  // ...

  return (
    <div>
      <h1>Cryptography Demonstration</h1>
      {/* Caesar Cipher content */}
      
      <div className={styles.demoSection}>
        <h2 className={styles.sectionTitle}>RSA Encryption</h2>
        <button onClick={handleGenerateKeys} disabled={rsaKeys}>Generate RSA Keys</button>
       {rsaKeys && rsaKeys.publicKey && rsaKeys.privateKey && (
  <>
    <strong>Public Key:</strong> e: {rsaKeys.publicKey.e && rsaKeys.publicKey.e.toString()} | n: {rsaKeys.publicKey.n && rsaKeys.publicKey.n.toString()}
    <br />
    <strong>Private Key:</strong> d: {rsaKeys.privateKey.d && rsaKeys.privateKey.d.toString()} | p: {rsaKeys.privateKey.p && rsaKeys.privateKey.p.toString()}
  </>
)}


        <div className={styles.inputGroup}>
          <label>Message to encrypt:</label>
          <input type="text" value={rsaMessage} onChange={(e) => setRsaMessage(e.target.value)} />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleRsaEncrypt} disabled={!rsaKeys}>Encrypt</button>
          <button onClick={handleRsaDecrypt} disabled={!rsaKeys || !rsaEncrypted}>Decrypt</button>
        </div>
        <div className={styles.result}>
          <strong>Encrypted:</strong> {rsaEncrypted && JSON.stringify(Array.from(rsaEncrypted))}
        </div>
        <div className={styles.result}>
          <strong>Decrypted:</strong> {rsaDecrypted}
        </div>
      </div>
      
      
    </div>
  );
};

export default CryptographyDemo;

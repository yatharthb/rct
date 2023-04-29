import React, { useState } from 'react';
import { generateRSAKeys, rsaEncrypt, rsaDecrypt } from './cryptoFunctions';
import styles from './CryptographyDemo.module.css';

const CryptographyDemo = () => {
  // Caesar Cipher related states and functions
  // ...

  // RSA Encryption related states and functions
  const [rsaKeys, setRsaKeys] = useState(null);
  const [rsaMessage, setRsaMessage] = useState('');
  const [rsaEncrypted, setRsaEncrypted] = useState(null);
  const [rsaDecrypted, setRsaDecrypted] = useState('');

  const handleGenerateKeys = async () => {
    const keys = await generateRSAKeys();
    setRsaKeys(keys);
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
        <button onClick={handleGenerateKeys}>Generate RSA Keys</button>
        <div className={styles.inputGroup}>
          <label>Message to encrypt:</label>
          <input type="text" value={rsaMessage} onChange={(e) => setRsaMessage(e.target.value)} />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleRsaEncrypt}>Encrypt</button>
          <button onClick={handleRsaDecrypt}>Decrypt</button>
        </div>
        <div>
          <strong>Encrypted:</strong> {rsaEncrypted && JSON.stringify(Array.from(rsaEncrypted))}
        </div>
        <div>
          <strong>Decrypted:</strong> {rsaDecrypted}
        </div>
      </div>
      
      
    </div>
  );
};

export default CryptographyDemo;

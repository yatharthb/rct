import React, { useState } from "react";

const CaesarCipher = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(0);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
  };

  const encrypt = () => {
    const encryptedText = text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
    setResult(encryptedText);
  };

  const decrypt = () => {
    const decryptedText = text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
    setResult(decryptedText);
  };

  return (
    <div>
      <h2>Caesar Cipher</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
      />
      <br />
      <input
        type="number"
        value={shift}
        onChange={handleShiftChange}
        placeholder="Shift value"
      />
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
      <br />
      <label>Result: {result}</label>
    </div>
  );
};

export default CaesarCipher;

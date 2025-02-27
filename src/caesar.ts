const caesarCipher = (msg: string, shift: number): string => {
  let cipher = "";
  for (let i = 0; i < msg.length; i++) {
    const code = msg.charCodeAt(i);
    let char = msg[i];

    if (code >= 65 && code <= 90) {
      char = String.fromCharCode(((char.charCodeAt(0) + shift - 65) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((char.charCodeAt(0) + shift - 97) % 26) + 97);
    }

    cipher += char;
  }
  return cipher;
};

export default caesarCipher;

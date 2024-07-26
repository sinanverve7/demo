import CryptoJS from "crypto-js";

export function encryption(data: string): string {
  const pwhash = CryptoJS.enc.Utf8.parse("7u4cdD4idLjiG03eY");
  const key = CryptoJS.enc.Hex.parse(
    pwhash.toString(CryptoJS.enc.Hex).substring(0, 32),
  );
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

export function decryption(data: string): string {
  const pwhash = CryptoJS.enc.Utf8.parse("i70JamExp5I1dvQL6");
  const key = CryptoJS.enc.Hex.parse(
    pwhash.toString(CryptoJS.enc.Hex).substr(0, 32),
  );
  const ciphertext = CryptoJS.enc.Hex.parse(data);
  const decrypted = CryptoJS.AES.decrypt(
    {
      ciphertext,
    } as CryptoJS.lib.CipherParams,
    key,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    },
  );
  return decrypted.toString(CryptoJS.enc.Utf8);
}

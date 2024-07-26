// global.d.ts
import { encryption, decryption } from "./utils/cryptoUtils";

declare global {
  var encryption: typeof encryption;
  var decryption: typeof decryption;
}

export {};

import CryptoJS from "crypto-js";

const secureKey = "MPFE4U8yCJ$Km5A6EudPg#5FQObKNvQ(y?Q}xge6W8?52+7oz0:MS/wZ";

// Encrypt data Function (handles any type: string, number, boolean, object, etc.)
export const encryptData = (data) => {
  const stringData = JSON.stringify(data); // Convert anything to string
  const encryptedData = CryptoJS.AES.encrypt(stringData, secureKey).toString();
  return encryptedData;
};

// Decrypt data Function (parse back to original type)
export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, secureKey);
  const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
  try {
    return JSON.parse(decryptedString); // Convert back to boolean, object, number, etc.
  } catch (e) {
    return decryptedString; // fallback for plain strings
  }
};

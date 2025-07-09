const key = 2;

// Encrypt boolean
export function encryptBoolean(boolValue) {
    const text = boolValue.toString(); // convert true/false to string
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) + key);
    }
    return encrypted;
}

// Decrypt to boolean
export function decryptBoolean(encryptedText) {
    let decrypted = '';
    for (let i = 0; i < encryptedText.length; i++) {
        decrypted += String.fromCharCode(encryptedText.charCodeAt(i) - key);
    }
    return decrypted === "true"; // convert string back to boolean
}
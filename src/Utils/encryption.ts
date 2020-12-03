import CryptoJS from 'crypto-js'

// funksjoner håndterer krypteringsmetoder fra crypto js
// forsikerer at metodene brukes likt gjennom alle


/** Krypterer tekst med angitt passord 
 * @param {string} text - tekst til kryptering
 * @param {string} passord - passord for kryptering
 * @returns {string} kryptert tekst
*/
export const encryptText = (text:string, password:string) : string =>
{
    let encrypted = CryptoJS.AES.encrypt(text, password);
    return encrypted.toString();
}

/** Dekrypterer  tekst med angitt passord 
 * @param {string} text - tekst til dekryptering
 * @param {string} passord - passord for dekryptering
 * @returns {string} dekrypert tekst
*/
export const decryptText = (encrypted: string, password: string) : string => 
{
    let decrypted = CryptoJS.AES.decrypt(encrypted, password);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

/** Transformerer tekst til SHA3 hash 
 * @param {string} text - tekst som skal hashes
 * @returns {string} Sha3 HASH
*/
export const createHash = (text: string) =>
{
    let hash = CryptoJS.SHA3(text);
    return hash.toString();
}

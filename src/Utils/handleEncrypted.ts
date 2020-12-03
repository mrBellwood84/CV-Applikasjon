import { IData } from "../Models/IData";
import { IEncryptedData } from "../Models/IEncryptedData";
import { decryptText, createHash } from "./encryption";


/** Håndterer dekryptering av tekst med passord.
 *  Dersom dekrypteringen er vellykket, blir informasjonen lagret i session storage.
 * 
 * @param {string} encryptedText - kryptert tekst
 * @param {string} password - passord
 * 
 *  @returns {boolean} sann hvis dekrypteringen var vellykket
 */
 function handleDecrypt(encryptedText:string, password:string)
{
    // sann dersom dekrypteringen var vellykket
    let decryptSuccess:boolean;

    let encData: string;
    let key: string;

    // inneholder kryptert dataobjekt
    try 
    {   
        // dekrypter og opprett objekt
        let str = decryptText(encryptedText, password);
        let encDataObj:IEncryptedData = JSON.parse(str);

        // opprett nøkkel
        encData = encDataObj.encryptedData;
        key = createHash(encDataObj.integrityHash + password)
        
        // dekrypter data
        let datastring: string = decryptText(encData, key);

        // test at data lar seg overføre til dataobjekt
        let data:IData = JSON.parse(datastring);

        decryptSuccess = true;

        window.sessionStorage.setItem("KEY",key);
        window.sessionStorage.setItem("DATA", encData)

    } 
    catch (error) 
    {
        decryptSuccess = false;
    }

    return decryptSuccess;
}

export default handleDecrypt;

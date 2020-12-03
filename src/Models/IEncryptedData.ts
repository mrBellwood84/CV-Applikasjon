// model for objekt med kryptert data.
// integritetshash verifiserer innholdet i dekryptert innhold

export interface IEncryptedData 
{
    integrityHash: string;
    encryptedData: string;
}
export interface IPerson
{
    contactInfo: IPersonContactInfo,
    personInfo: IPersonInfo[]

}

export interface IPersonContactInfo
{
    name: string;
    adress1: string;
    adress2: string;
    email: string;
    phonenumer: string;
}

export interface IPersonInfo
{
    title: string;
    story: string[];
}
import { IAppInfo } from "./IAppInfo";
import { ICv } from "./ICv";
import { ILanguage } from "./ILanguage";
import { ILetter } from "./ILetter";
import { IPerson } from "./IPerson";
import { IProject } from "./IProject";
import { ITools } from "./ITools";

// modell for dataobjekt

export interface IData
{
    letter: ILetter;
    cv: ICv;
    languages: ILanguage[];
    projects: IProject[];
    tools: ITools[];
    person: IPerson;
    appInfo: IAppInfo;
}
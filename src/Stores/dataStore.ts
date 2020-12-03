import { makeObservable, observable, action, runInAction } from "mobx";
import { ICv } from "../Models/ICv";
import { ILanguage } from "../Models/ILanguage";
import { ILetter } from "../Models/ILetter";
import { decryptText } from "../Utils/encryption";
import { IData } from "../Models/IData";
import { IProject } from "../Models/IProject";
import { ITools } from "../Models/ITools";
import { IPerson } from "../Models/IPerson";
import { IAppInfo } from "../Models/IAppInfo";
import { RootStore } from "./rootStore";


/** Klasse for alle LoadScreen variabler */
// eksporter klass esom default
export default class DataStore {

    // felt for rootStore
    rootStore: RootStore;


    // constructor for LoadStore
    constructor(rootStore: RootStore)
    {
        // Legg til RootStore for samhandling med root
        this.rootStore = rootStore;

        // gjør observables til observables...
        makeObservable(this);
    }


    /** Sann dersom innhold er lastet inn */
    @observable 
    dataIsValid: boolean = false

    /** Inneholder søknadsbrev */
    @observable
    Letter?: ILetter | undefined = undefined;

    /** Inneholder CvObjekt */
    @observable
    CvData?: ICv | undefined = undefined;

    /** inneholder prog.lang objekter */
    @observable
    languageData?: ILanguage[] | undefined = undefined;

    /** inneholder data om prosjekter */
    @observable
    projectData?: IProject[] | undefined = undefined;

    /** inneholder data om verktøy */
    @observable
    toolsData?: ITools[] | undefined = undefined;

    /** inneholder data om kontaktinformasjon og personlige trekk */
    @observable
    personData?: IPerson | undefined = undefined;

    /** inneholder informasjon om denne applikasjonen */
    @observable
    appInfoData?: IAppInfo | undefined = undefined;


    /** setter applikasjonsdata fra  */
    @action
    loadSessionStorageData = () => {
        runInAction(() => {
            let key = sessionStorage.getItem("KEY");
            let encrypted = sessionStorage.getItem("DATA");
            let datastring = decryptText(encrypted!, key!);
            let data:IData = JSON.parse(datastring);

            this.Letter = data.letter;
            this.CvData = data.cv;
            this.languageData = data.languages;
            this.projectData = data.projects;
            this.toolsData = data.tools;
            this.personData = data.person;
            this.appInfoData = data.appInfo;
        });

        this.dataIsValid = true;
    }


}



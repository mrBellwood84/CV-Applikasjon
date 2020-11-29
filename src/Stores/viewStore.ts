import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./rootStore";

export class ViewStore
{
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;

        makeObservable(this);
    }

    /** String er keyword for switch i HomepageContent */
    @observable
    viewController:string | undefined;

    /** String keyword for content switch i CvContent */
    @observable
    cvView: string | undefined;


    /** Sjekker om søknadsbrev finnes,  setter keyword for switch */
    @action
    validLetter = () => {
        let view = this.rootStore.dataStore.Letter ? "letter" : undefined;
        this.viewController = view;
    }

    /** Sjekker om cv finnes, setter keyword for switch */
    @action
    validCv = () => {
        let view = this.rootStore.dataStore.CvData ? "cv" : undefined;
        this.viewController = view;
    }

    /** Sjekker language data, setter keyword for switch */
    @action
    validLang = () => {
        let view = this.rootStore.dataStore.languageData ? "lang" : undefined;
        this.viewController = view;
    }

    /** Sjekker prosjekt data, setter keyword for switch */
    @action
    validProject = () => {
        let view = this.rootStore.dataStore.projectData ? "project" : undefined;
        this.viewController = view;
    }

    /** Sjekker tools data, setter keyword for switch */
    @action
    validTools = () => {
        let view = this.rootStore.dataStore.toolsData ? "tools" : undefined;
        this.viewController = view;
    }

    /** Sjekker kontakt og person data, setter keyword for switch */
    @action
    validPerson = () => {
        let view = this.rootStore.dataStore.personData ? "person" : undefined;
        this.viewController = view;
    }

    /** Sjekker app info data, setter keyword for switch */
    @action
    validAppInfo = () => {
        let view = this.rootStore.dataStore.appInfoData ? "appdata" : undefined;
        this.viewController = view;
    }


    /** bestemmer view i cv info container */
    @action
    setCvView = (view: string) => {
        this.cvView = view;
    }
}
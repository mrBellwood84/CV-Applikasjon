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
        // let view = this.rootStore.dataStore.Letter ? "letter" : undefined;
        // this.viewController = view;

        // --DEV 
        this.viewController = "letter"
    }

    /** Sjekker om cv finnes, setter keyword for switch */
    @action
    validCv = () => {
        let view = this.rootStore.dataStore.CvData ? "cv" : undefined;
        this.viewController = view;

        // --DEV
        // this.viewController = "cv";
    }

    /** Setter keyword string for cv items */
    @action
    setCvView = (view: string) => {
        this.cvView = view;
    }
}
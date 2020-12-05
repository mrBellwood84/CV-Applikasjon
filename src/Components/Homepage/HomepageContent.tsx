import { PDFViewer } from "@react-pdf/renderer";
import { observer } from "mobx-react-lite"
import React, { useContext } from "react";
import { rootStoreContext } from "../../Stores/rootStore";
import CvPdf from "../PDF/CvPdf";
import AppInfoMain from "./AppInfo/AppInfoMain";
import CvMain from "./Cv/CvMain";
import LanguageMain from "./Language/LanguageMain";
import LetterMain from "./Letter/LetterMain";
import NoContentDark from "./NoContentDark";
import PersonMain from "./Person/PersonMain";
import ProjectMain from "./Project/ProjectMain";
import ToolsMain from "./Tools/ToolsMain";

/** Returnerer innholdskomponenet avhengig av verdi i MobX store: "viewStore.ts".
 *  Verdien kan forandres med action fra samme MobX store.
 *  Funksjonene fra "viewStore.ts" settes som click attributt i link komponenter når de legges til i navigasjonskomponent.
 *  */
const HomepageContent = () => {

    const rootStore = useContext(rootStoreContext)
    const {viewController} = rootStore.viewStore;

    switch (viewController) {

        case "letter":
            return (<LetterMain />)

        case "cv":
            return (<CvMain/>)

        case "lang":
            return(<LanguageMain />)

        case "project":
            return(<ProjectMain />)
        
        case "tools":
            return(<ToolsMain />)
        
        case "person":
            return (<PersonMain />)
        
        case "appdata":
            return (<AppInfoMain />)
        case "pdf":
            return (
                <PDFViewer
                    height={"100%"}
                    width={"100%"}>
                    <CvPdf />
                </PDFViewer>
            )

        default:
            return (
                <NoContentDark />
            )
    }
}

export default observer(HomepageContent);
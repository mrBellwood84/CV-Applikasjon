import { observer } from "mobx-react-lite";
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import NoContentLight from "../NoContentLight";

const LanguageContent = () => {

    const rootStore = useContext(rootStoreContext)
    const { langView } = rootStore.viewStore;

    if (!langView)
    {
        return ( <NoContentLight /> )
    }

    return (
        <div className="langContentContainer">
            <h4 className="pageHeader"> {langView.name} </h4>
            <p className="pageInfoParagraph"> 
                <span className="custLabel">Nivå: </span> {langView.level}
            </p>
            <p className="pageInfoParagraph">
                <span className="custLabel">Sertifisert: </span> {langView.certified ? "Ja" : "Nei"}
            </p>

            {langView.comment && langView.comment.map(x => (
                <p className="pageParagraph"
                    key={`lngpKey${langView.comment.indexOf(x)}`}
                    >
                        {x}
                </p>
            ))}
        </div>
    )
}

export default observer(LanguageContent)
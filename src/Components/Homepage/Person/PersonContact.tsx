import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"

const PersonContact = () => 
{

    const rootStore = useContext(rootStoreContext);
    const { contactInfoView } = rootStore.viewStore;

    return(
        <div className="personContentContainer">
            
            <h4 className="pageHeader"> Kontaktinformasjon </h4>

            <p className="pageParagraph"> {contactInfoView?.name} </p>

            <p className="pageParagraph"> {contactInfoView?.adress1} </p>

            <p className="pageParagraph"> {contactInfoView?.adress2} </p>

            <p className="pageInfoParagraph">
                <span className="custLabel">TLF: </span> {contactInfoView?.phonenumer}
            </p>

            <p className="pageInfoParagraph">
                <a href={`mailto:${contactInfoView?.email}`} target="_blank"> {contactInfoView?.email} </a>
            </p>
        </div>
    )
}

export default observer(PersonContact)
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import PageLink from "../PageLink"
import './person.scss'
import PersonContact from "./PersonContact"
import PersonContent from "./PersonContent"

const PersonMain = () => {

    const rootStore = useContext(rootStoreContext)
    const { personData } = rootStore.dataStore;
    const { setPersonInfoView, setContactInfoView, contactInfoView } = rootStore.viewStore;

    return (
        <div className="personContainer">
            <div className="personLinkContainer">
                <PageLink 
                    content="Kontaktinformasjon"
                    click={() => setContactInfoView(personData?.contactInfo!)} />
                {personData?.personInfo.length && personData.personInfo.map(x => (
                    <PageLink
                        key={`perinfcnt${personData.personInfo.indexOf(x)}`}
                        content={x.title}
                        click={() => setPersonInfoView(x)} />
                ))}
            </div>
            <div>
                {contactInfoView && (
                    <PersonContact />
                )}
                {!contactInfoView && (
                    <PersonContent />
                )}
            </div>
        </div>
    )
}

export default observer(PersonMain)
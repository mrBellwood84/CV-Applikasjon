import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { rootStoreContext } from "../../../Stores/rootStore";
import PageLink from "../PageLink";
import './lang.scss';
import LanguageContent from "./LanguageContent";

const LanguageMain = () => {

    const rootStore = useContext(rootStoreContext);
    const { languageData } = rootStore.dataStore;
    const { setLangView } = rootStore.viewStore;

    return (
        <div className="langContainer">
            <div className="langLinkContainer">
                {languageData && languageData.map(x => (
                    <PageLink 
                        key = {`pglink${languageData.indexOf(x)}`}
                        content={x.name} 
                        click={() => setLangView(x) }  />
                ))}
            </div>
            <div>
                <LanguageContent />
            </div>
        </div>
    )
}

export default observer(LanguageMain)
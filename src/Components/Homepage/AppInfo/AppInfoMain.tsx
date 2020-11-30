import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import './appinfo.scss'

const AppInfoMain = () => {

    const rootStore = useContext(rootStoreContext);
    const { appInfoData } = rootStore.dataStore;

    return (
        <div className="appInfoContainer">
            <h4 className="pageHeader"> {appInfoData?.title} </h4>

            {appInfoData?.info && appInfoData.info.map(x => (
                <p className="pageParagraph"
                    key = {`appinfparkey${appInfoData.info.indexOf(x)}`}>
                        {x}
                    </p>
            ))}
            
        </div>
    )
}

export default observer(AppInfoMain);
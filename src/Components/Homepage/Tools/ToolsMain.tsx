import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import PageLink from "../PageLink"
import "./tool.scss";
import ToolContent from "./ToolContent";

const ToolsMain = () => {

    const rootStore = useContext(rootStoreContext)
    const { toolsData } = rootStore.dataStore;
    const { setToolView } = rootStore.viewStore;

    return (
        <div className="toolContainer">
            <div className="toolLinkContainer">
                {toolsData && toolsData.map(x => (
                    <PageLink
                        key = {`tlpglnk${toolsData.indexOf(x)}`}
                        content = {x.name}
                        click = {() => setToolView(x)} />
                ))}
            </div>
            <div>
                <ToolContent />
            </div>
        </div>
    )
}

export default observer(ToolsMain)
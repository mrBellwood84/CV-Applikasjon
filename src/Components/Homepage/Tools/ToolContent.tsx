import { observer } from "mobx-react-lite";
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import NoContentLight from "../NoContentLight";
import "./tool.scss";

const ToolContent = () => {
    const rootStore = useContext(rootStoreContext);
    const { toolView } = rootStore.viewStore;

    if(!toolView)
    {
        return ( <NoContentLight /> )
    }

    return (
        <div className="toolContentContainer">
            <h4 className="pageHeader"> {toolView.name} </h4>

            {toolView.comment && toolView.comment.map(x => (
                <p key={`tlprg${toolView.comment.indexOf(x)}`}
                    className="pageParagraph">
                        {x}
                </p>
            ))}

            {toolView.link && (
                <p className="pageInfoParagraph">
                    <a href={toolView.link} target="_blank"> Lenke til nettsted </a>
                </p>
            )}
        </div>
    )
}

export default observer(ToolContent)
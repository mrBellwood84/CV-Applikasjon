import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { rootStoreContext } from "../../../Stores/rootStore";
import NoContentLight from "../NoContentLight";
import './project.scss';


const ProjectContent = () => 
{
    const rootStore = useContext(rootStoreContext);
    const { projectView } = rootStore.viewStore

    if (!projectView)
    {
        return ( <NoContentLight /> )
    }

    return (
        <div className="projectContentContainer">
            
            <h4 className="pageHeader"> {projectView.name} </h4>
            
            <p className="pageInfoParagraph">
                <span className="custLabel">Type: </span> {projectView.type}
            </p>
            
            <p className="pageInfoParagraph">
                <span className="custLabel">Språk: </span> {projectView.languages}
            </p>

            {projectView.comments && projectView.comments.map(x => (
                <p key={`prparkey${projectView.comments.indexOf(x)}`}
                    className="pageParagraph">
                    {x}
                </p>
            ))}

            {projectView.link && (
                <p className="pageInfoParagraph">
                    <a href={projectView.link} target="_blank">Lenke til projekt</a>
                </p>
            )}

        </div>
    )
}

export default observer(ProjectContent)
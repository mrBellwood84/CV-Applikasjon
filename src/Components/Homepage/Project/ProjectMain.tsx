import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import PageLink from "../PageLink"
import ProjectContent from "./ProjectContent"
import './project.scss';

const ProjectMain = () => {

    const rootStore = useContext(rootStoreContext)
    const { projectData } = rootStore.dataStore;
    const { setProjectView } = rootStore.viewStore;

    return (
        <div className="projectContainer">
            <div className="projectLinkContainer">
                {projectData && projectData.map(x => (
                    <PageLink
                        key={`pjpglink${projectData.indexOf(x)}`}
                        content={x.name}
                        click={() => setProjectView(x)} />
                ))}
            </div>
            <div>
                <ProjectContent />
            </div>
        </div>
    )
}

export default observer(ProjectMain)
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Content } from "react-bootstrap/lib/Tab"
import { rootStoreContext } from "../../../Stores/rootStore"
import NoContentLight from "../NoContentLight"

const PersonContent = () => 
{
    const rootStore = useContext(rootStoreContext);
    const { personInfoView } = rootStore.viewStore;

    if (!personInfoView)
    {
        return ( <NoContentLight /> )
    }

    return(
        <div className="personContentContainer">

            <h4 className="pageHeader"> {personInfoView?.title} </h4>
            {personInfoView?.story && personInfoView.story.map(x => (
                <p key={`prinfitem${personInfoView.story.indexOf(x)}`}
                    className="pageParagraph">
                        {x}
                    </p>
            ))}

        </div>
    )
}

export default observer(PersonContent)
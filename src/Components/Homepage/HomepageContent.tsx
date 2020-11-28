import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { rootStoreContext } from "../../Stores/rootStore";
import CvMain from "./CvComponent/CvMain";
import JobAppComponent from "./JobAppPage/JobAppComponent";

const HomepageContent = () => {

    const rootStore = useContext(rootStoreContext)
    const {viewController} = rootStore.viewStore;

    switch (viewController) {

        case "letter":
            return (<JobAppComponent />)

        case "cv":
            return (<CvMain/>)

        default:
            return (
                <div>
                    Ingen Side
                </div>
            )
    }
}

export default observer(HomepageContent);
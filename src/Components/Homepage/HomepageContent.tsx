import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { rootStoreContext } from "../../Stores/rootStore";
import CvMain from "./CvComponent/CvMain";
import LetterMain from "./LetterComponent/LetterMain";
import NoContent from "./NoContent";

const HomepageContent = () => {

    const rootStore = useContext(rootStoreContext)
    const {viewController} = rootStore.viewStore;

    switch (viewController) {

        case "letter":
            return (<LetterMain />)

        case "cv":
            return (<CvMain/>)

        default:
            return (
                <NoContent />
            )
    }
}

export default observer(HomepageContent);
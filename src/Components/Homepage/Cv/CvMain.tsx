import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import './cv.scss'
import CvLinkItem from "./CvLinkItem";
import CvContent from "./CvContent";

const CvMain = () => {
    
    const rootStore = useContext(rootStoreContext);
    const {CvData} = rootStore.dataStore;
    const {setCvView} = rootStore.viewStore;

    return (
        <div className="cvContainer">
            <div className="cvLinkContainer">
                <CvLinkItem content={CvData?.job.title!} click={() => {setCvView("job")}} />
                <CvLinkItem content={CvData?.education.title!} click={() => {setCvView("edu")}} />
                <CvLinkItem content={CvData?.otherItems.title!} click={() => {setCvView("other")}} />
                <CvLinkItem content={CvData?.references.title!} click={() => {setCvView("ref")}} />
            </div>
            <div className="cvContentContaier">
                <CvContent />
            </div>
        </div>
    )
}

export default observer(CvMain)
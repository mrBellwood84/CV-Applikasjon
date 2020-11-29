import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import NoContentLight from "../NoContentLight";
import CvEducationItem from "./CvEducationItem";
import CvJobItem from "./CvJobItem";
import CvOtherItem from "./CvOtherItem";
import CvReferenceItem from "./CvReferenceItem";

const CvContent = () => {

    const rootStore = useContext(rootStoreContext);
    const {CvData} = rootStore.dataStore;
    const {cvView} = rootStore.viewStore;

    switch (cvView)
    {
        case "job":
            return (
                <div className="cvContentContaier">
                    {CvData?.job.jobs.map(job => (
                        <CvJobItem jobItem={job} key={job.yearSpan}/>
                    ))}
                </div>
            );
        case "edu":
            return (
                <div className="cvContentContaier">
                    {CvData?.education.educations.map(edu => (
                        <CvEducationItem educationItem={edu} key={edu.yearSpan}/>
                    ))}
                </div>
            )
        case "other":
            return (
                <div className="cvContentContaier">
                    {CvData?.otherItems.other.map(other => (
                        <CvOtherItem key={`other${CvData.otherItems.other.indexOf(other)}`} otherItem={other} />
                    ))}
                </div>
            )
        case "ref":
            return (
                <div className="cvContentContaier">
                    {CvData?.references.references.map(ref => (
                        <CvReferenceItem key={ref.name} reference={ref} />
                    ))}
                </div>
            )
        default:
            return (
                <div>
                    <NoContentLight />
                </div>
            )
    }



}

export default observer(CvContent)
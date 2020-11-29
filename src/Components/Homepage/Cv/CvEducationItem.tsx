import { observer } from "mobx-react-lite";
import { ICvEductationItem } from "../../../Models/ICv";

interface IProps {
    educationItem: ICvEductationItem
}

const CvEducationItem: React.FC<IProps> = ({educationItem}) => {
    
    return (
        <div className="cvItemContainer">
            <p className="cvHeader"> {educationItem.school} </p>
            <p className="cvDateSpan"> {educationItem.yearSpan} </p>
            <p className="cvInfoData"> {educationItem.course} </p>
            {educationItem.comment && (
                <p className="cvComment"> {`( ${educationItem.comment} )`} </p>
            )}
        </div>
    )
}

export default observer(CvEducationItem)
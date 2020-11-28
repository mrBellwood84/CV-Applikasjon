import { observer } from "mobx-react-lite"
import { ICvJobItem } from "../../../Models/CvModels"
import './cv.scss'

interface IProps {
    jobItem: ICvJobItem;
}

const CvJobItem: React.FC<IProps> = ({jobItem}) => {
    
    return (
        <div className="cvItemContainer">
            <p className="cvHeader">{jobItem.employer}</p>
            <p className="cvDateSpan">{jobItem.yearSpan}</p>
            <p className="cvInfoData">{jobItem.comment}</p>
        </div>
    )
}

export default observer(CvJobItem)
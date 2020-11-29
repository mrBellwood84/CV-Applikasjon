import { observer } from "mobx-react-lite";
import { ICvOther } from "../../../Models/ICv";

interface IProps
{
    otherItem: ICvOther;
}

const CvOtherItem: React.FC<IProps> = ({otherItem}) => {
    return (
        <div className="cvItemContainer">
            <p className="cvInfoData"> {otherItem.item} </p>
        </div>
    )
}

export default observer(CvOtherItem);
import { observer } from "mobx-react-lite";
import { ICvReference } from "../../../Models/CvModels";

interface IProps {
    reference: ICvReference;
}

const CvReferenceItem: React.FC<IProps> = ({reference}) => {
    return (
        <div className="cvItemContainer">
            <p className="cvHeader"> {reference.name} </p>
            <p className="cvDateSpan"> {reference.title} </p>
            <p className="cvInfoData"> {`tlf: ${reference.phonenumber}`} </p>

            {reference.email && (
                <p className="cvInfoData"> {`epost: ${reference.email}`} </p>
            )}
        </div>
    )
}

export default observer(CvReferenceItem)
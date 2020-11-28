import { observer } from "mobx-react-lite"

interface IProps{
    content: string;
    click: () => void;
}

const CvLinkItem: React.FC<IProps> = ({content, click}) => {

    return (
        <div className="CvLink" onClick={click} >
            {content}
        </div>
    )
}

export default observer(CvLinkItem)
import { observer } from "mobx-react-lite"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import './navbar.scss'

interface IProps{
    content:string;
    tooltiptxt: string;
}

const NavLink: React.FC<IProps> = ({content, tooltiptxt}) => {

    return (
        <OverlayTrigger
            key={`ovltrgkey${content}`}
            placement="bottom"
            overlay={
                <Tooltip id={`tooltip${content}`}
                    bsPrefix="custToolTip">
                    {tooltiptxt}
                </Tooltip>
            }>


            <div className="navlink">
                {`<${content}/>`}
            </div>
        </OverlayTrigger>

    )
}

export default observer(NavLink)
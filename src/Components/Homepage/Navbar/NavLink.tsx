import { observer } from "mobx-react-lite"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import './navbar.scss'

interface IProps{
    content:string;
    tooltiptxt: string;
    click: () => void;
}

/** NavLink element 
 * @param content - link text
 * @param tooltiptxt - text tooltip
 * @param click - funksjonsutrykk for clickevent
 */

const NavLink: React.FC<IProps> = ({content, tooltiptxt, click}) => {

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

            <div className="navlink"
                onClick={click}>
                {`<${content}/>`}
            </div>
        </OverlayTrigger>

    )
}

export default observer(NavLink)
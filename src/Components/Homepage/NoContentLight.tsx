import { observer } from 'mobx-react-lite'
import './homepage.scss'

const NoContentLight = () => {

    return (
        <div className="noContentContanerLight">
            <div className="noContentTextLight">
                TRYKK PÅ EN LINK
            </div>
        </div>
    )
}

export default observer(NoContentLight)
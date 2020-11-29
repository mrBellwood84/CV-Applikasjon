import { observer } from 'mobx-react-lite'
import './homepage.scss'

const NoContentDark = () => {

    return (
        <div className="noContentContaier">
            <div className="noContentText">
                TRYKK PÅ EN LINK
            </div>
        </div>
    )
}

export default observer(NoContentDark)
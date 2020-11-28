
import { observer } from 'mobx-react-lite'
import './nocontent.scss'

const NoContent = () => {

    return (
        <div className="noContentContaier">
            <div className="noContentText">
                Velg innhold...
            </div>
        </div>
    )
}

export default observer(NoContent)
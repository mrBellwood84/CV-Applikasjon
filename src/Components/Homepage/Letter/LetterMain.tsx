import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import './letter.scss'

const LetterMain = () => {

    const rootStore = useContext(rootStoreContext)
    const {Letter} = rootStore.dataStore;

    return (
        <div className="letterContainer">

            <h4 className="pageHeader"> {Letter?.title} </h4>

            {Letter?.content && Letter.content.map(x => (
                <p className="pageParagraph"
                    key = {`ltrcntkey${Letter.content.indexOf(x)}`}>
                    {x}
                </p>            
            ))}

            <p className="letterRegards">
                {Letter?.greeting}
            </p>

            <p className="letterSignature">
                {Letter?.signature}
            </p>
                
        </div>
    )
}

export default observer(LetterMain)
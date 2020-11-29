import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { rootStoreContext } from "../../../Stores/rootStore"
import './letter.scss'

const LetterMain = () => {

    const rootStore = useContext(rootStoreContext)
    const {Letter} = rootStore.dataStore;

    return (
        <div className="letterContainer">
            <div className="letterInner">

                <div className="letterHead">
                    {Letter?.title}
                </div>
                <div className="letterContent">
                    {Letter?.content && Letter.content.length > 0 && (
                        Letter.content.map(para => (
                            <p key={Letter.content.indexOf(para)}> {para} </p>
                        ))
                    ) }
                </div>
                <div className="letterGreeting">
                    {Letter?.greeting}
                </div>
                <div className="letterSignature">
                    {Letter?.signature}
                </div>
                
            </div>
        </div>
    )
}

export default observer(LetterMain)
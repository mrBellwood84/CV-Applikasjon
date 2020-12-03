import { observer } from 'mobx-react-lite'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { rootStoreContext } from '../../Stores/rootStore'
import '../../Styling/common.scss'
import './loadscreen.scss'


/** Oppstartskomponent for applikasjon. Gir muligheten for å dekrypterer innhold fra søknadsbrev */
const LoadScreen = () => {

    const rootStore = useContext(rootStoreContext)
    const { setShowDecryptModal } = rootStore.viewStore;

    return (
        <div className="loadScreenContainer">
            <div className="contentContainer">
                <h4 className="pageHeader">Velkommen</h4>
                <p className="pageParagraph">Du har sikkert kommet hit fordi du fikk en link via en epost.</p>
                <p className="pageParagraph">Vel, Her skjer det ikke stort mer, sånn med det første...</p>
                <p className="pageParagraph">I samme epost skal det følge med et passord og en txt fil med kryptert innhold.</p>
                <p className="pageParagraph">Mitt tips er å trykke på knappen nedenfor for å dekryptere teksten.</p>
                <Button 
                    className="buttonDecrypt" 
                    variant="outline-warning"
                    onClick={() => setShowDecryptModal(true)} >
                        Dekrypter
                    </Button>
            </div>
        </div>
    )
}

export default observer(LoadScreen)
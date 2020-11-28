import { observer } from 'mobx-react-lite'
import {Button} from 'react-bootstrap'
import { useContext } from 'react'
import { rootStoreContext } from '../../Stores/rootStore'
import '../../Styling/common.scss'
import './loadscreen.scss'


/** Oppstartskomponent for applikasjon. Gir muligheten for å dekrypterer innhold fra søknadsbrev */
const LoadScreen = () => {

    const rootStore = useContext(rootStoreContext);
    const { setDataIsValid } = rootStore.dataStore

    return (
        <div className="loadScreenContainer">
            <div className="contentContainer">
                <h2>Velkommen</h2>
                <h4>til Kristians CV applikasjon</h4>
                <p>Jeg antar du har beveget deg inn hit fordi du har mottatt en merkelig søknad.</p>
                <p>Trykk "Dekrypter" nedenfor for å få tilgang på innholdet i teksten.</p>
                <div className="buttonContaier">
                    <Button variant="outline-warning" onClick={() => {setDataIsValid()}} >Dekrypter</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default observer(LoadScreen)
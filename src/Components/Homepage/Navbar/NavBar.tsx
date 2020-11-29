import { observer } from 'mobx-react-lite';
import NavLink from './NavLink'
import './navbar.scss'
import { useContext } from 'react';
import { rootStoreContext } from '../../../Stores/rootStore';

/** Navigasjonskomponent for applikasjon. Knappene bruker click funksjon fra "viewStore.ts" for å verifisere innhold. 
 * Dersom innhold er verifisert, vil innholdskomponenten oppdateres*/
const NavBar = () => {


    // tilgang til rootStore
    const rootStore = useContext(rootStoreContext);
    // dekonsturert objekt fra viewstore, henter funksjoner for click event
    const {
        validLetter, 
        validCv,
        validLang,
        validProject,
        validTools,
        validPerson,
        validAppInfo    
    } = rootStore.viewStore;


    return (
        <div className="navbarContainer">
            <NavLink 
                content="Søknad" 
                tooltiptxt="Søknadsbrev"
                click={validLetter}
                />
            <NavLink 
                content="CV"
                tooltiptxt="Min CV"
                click={validCv} />
            <NavLink 
                content="Språk"
                tooltiptxt="Programmeringsspråk"
                click={validLang} />
            <NavLink 
                content="Prosjekter"
                tooltiptxt="Mine tidligere prosjekter"
                click={validProject} />
            <NavLink 
                content="Verktøy"
                tooltiptxt="Mine verktøy"
                click={validTools} />
            <NavLink 
                content="Meg"
                tooltiptxt="Kontaktinformasjon og litt om meg" 
                click={validPerson} />
            <NavLink 
                content="Om Appen"
                tooltiptxt="Informasjon om denne applikasjonen"
                click={validAppInfo} />

        </div>
    )

}

export default observer(NavBar);
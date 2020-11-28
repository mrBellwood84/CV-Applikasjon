import { observer } from 'mobx-react-lite';
import NavLink from './NavLink'
import './navbar.scss'
import { useContext } from 'react';
import { rootStoreContext } from '../../../Stores/rootStore';


// import NavLink from './NavLink';

const NavBar = () => {

    const rootStore = useContext(rootStoreContext);
    const {validLetter, validCv} = rootStore.viewStore;

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
            {/* <NavLink content="Språk" />
            <NavLink content="Verktøy"/>
            <NavLink content="Meg" />
            <NavLink content="Appen" />
            <NavLink content="Last ned" /> */}
        </div>
    )

}

export default observer(NavBar);
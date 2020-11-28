import { observer } from 'mobx-react-lite';
import NavLink from './NavLink'
import './navbar.scss'


// import NavLink from './NavLink';

const NavBar = () => {

    return (
        <div className="navbarContainer">
            <NavLink 
                content="Søknadsbrev" 
                tooltiptxt="Søknadsbrev"/>
            <NavLink 
                content="CV"
                tooltiptxt="Min CV"/>
            {/* <NavLink content="Språk" />
            <NavLink content="Verktøy"/>
            <NavLink content="Meg" />
            <NavLink content="Appen" />
            <NavLink content="Last ned" /> */}
        </div>
    )

}

export default observer(NavBar);
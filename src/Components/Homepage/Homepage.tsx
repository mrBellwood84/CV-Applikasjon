import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react'
import HomepageContent from './HomepageContent';
import NavBar from './Navbar/NavBar';


const Homepage = () => {

    return (
        <Fragment>
            <NavBar />

            <div className="homepageContentContainer">
                <HomepageContent />
            </div>
            
        </Fragment>
    )
}

export default observer(Homepage);
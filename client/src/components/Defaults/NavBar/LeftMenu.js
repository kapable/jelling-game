import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../../api/DefaultImg/logo-img.png'

function LeftMenu() {
    return (
        <Fragment>
            <a href="/">
                <img src={Logo} alt="jelling" className="nav-logo"/>
            </a>
        </Fragment>
    )
}

export default withRouter(LeftMenu)
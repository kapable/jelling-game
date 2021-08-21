import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function LeftMenu(props) {
    return (
        <Fragment>
            <a href="/">Jelling</a>
        </Fragment>
    )
}

export default withRouter(LeftMenu)
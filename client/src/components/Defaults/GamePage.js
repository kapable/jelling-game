import React, { Fragment } from 'react'
import { withRouter, useHistory } from 'react-router-dom';

function GamePage(props) {
    // eslint-disable-next-line
    let history = useHistory();
    return (
        <Fragment>
            <iframe
                title={props.game_title}
                src={props.game_source}
                className="game-iframe"
                ></iframe>
            <button
                className="game-to-main-btn"
                onClick={function(e) {
                    e.preventDefault();
                    history.goBack()
                }}>메인으로</button>
        </Fragment>
    )
}

export default withRouter(GamePage)

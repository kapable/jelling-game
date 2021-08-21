import React, { Fragment } from 'react'
import { withRouter, useHistory } from 'react-router-dom';

function GamePage(props) {
    // eslint-disable-next-line
    let history = useHistory();
    return (
        <Fragment>
            <iframe
                title={props.game_info[0]}
                src={props.game_info[1]}
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

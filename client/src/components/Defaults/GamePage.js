import React from 'react'
import { withRouter } from 'react-router-dom';
import MetaTagRenderer from './MetaTagRenderer';

function GamePage(props) {
    return (
        <div className="game-div">
            <MetaTagRenderer game={props.game}/>
            <iframe
                title={props.game.title}
                src={props.game.sourceURL}
                className="game-iframe"
            ></iframe>
        </div>
    )
}

export default withRouter(GamePage)

import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import MetaTagRenderer from './MetaTagRenderer';

function GamePage(props) {
    useEffect(() => {
        window.oncontextmenu = function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        };
    }, [])

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

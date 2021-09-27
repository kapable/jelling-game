import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import MetaTagRenderer from './MetaTagRenderer';

function GamePage(props) {
    useEffect(() => {
        function absorbEvent_(event) {
            var e = event || window.event;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        }
    
        function preventLongPressMenu(nodes) {
            for(var i=0; i<nodes.length; i++){
            nodes[i].ontouchstart = absorbEvent_;
            nodes[i].ontouchmove = absorbEvent_;
            nodes[i].ontouchend = absorbEvent_;
            nodes[i].ontouchcancel = absorbEvent_;
            }
        }
        preventLongPressMenu(document.querySelectorAll('.game-div'));
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

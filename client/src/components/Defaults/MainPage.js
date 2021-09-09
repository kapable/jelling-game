import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import GAMES from '../../api/GAMES'
import './Defaults.css';

function MainPage() {
    return (
        <div className="main-div">
            {GAMES.map((item) => (
                <Link to={'/'+item.mainUrl+'/'} className="main-game-thumbnail-link" key={item.mainUrl}> 
                    <img className="main-game-thumbnail-img" src={item.thumbImage} alt={item.title} />
                </Link>
            ))}
        </div>
    )
}

export default withRouter(MainPage)

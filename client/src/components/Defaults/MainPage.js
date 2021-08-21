import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import GAMES from '../../api/GAMES'
import './Defaults.css';

function MainPage(props) {
    useEffect(() => {
        // axios.get('/api/hello')
        // .then(response => console.log(response.data))
    }, [props])

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

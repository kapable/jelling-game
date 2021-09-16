import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import GAMES from '../../api/GAMES'
import TOPLOGOBAR from '../../api/DefaultImg/top-logo-bar.png'
import TOPBANNER from '../../api/DefaultImg/top-banner.png'
import COMMINGSOON from '../../api/DefaultImg/coming-soon-thumb.png'
import ReactGA from 'react-ga';
import './Defaults.css';

function MainPage() {
    const commingSoonRenderer = (num_loop) => {
        let comming_soons = [];
        for(let i=0; i < num_loop;i++) {
            comming_soons.push(
                <img className="main-game-thumbnail-img" key={i} src={COMMINGSOON} alt="COMMING SOON" />
            )
        }
        return comming_soons
    }

    const onImgClick = () => {
        _eventSenderGA("Paging", "Click to-game-intro Image", 'main page')
    }

    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    return (
        <div className="main-div">
            <img src={TOPLOGOBAR} alt="JELLING" className="main-game-thumbnail-img"/>
            <img src={TOPBANNER} alt="JELLING GAMES" className="main-game-thumbnail-img"/>
            {GAMES.map((item) => (
                <Link to={'/'+item.mainUrl+'/'} className="main-game-thumbnail-link" key={item.mainUrl} onClick={onImgClick}> 
                    <img className="main-game-thumbnail-img" src={item.thumbImage} alt={item.title} />
                </Link>
            ))}
            {commingSoonRenderer(5)}
        </div>
    )
}

export default withRouter(MainPage)

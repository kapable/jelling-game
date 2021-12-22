import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import GAMES from '../../api/GAMES';
import TOPBANNER from '../../api/DefaultImg/top-banner.png';
import COMMINGSOON from '../../api/DefaultImg/coming-soon-thumb.png';
import NavigationBar from '../Defaults/NavBar/NavigationBar';
import ReactGA from 'react-ga';
import './Defaults.css';
import Crypto from './Crypto';
import Upbit from './Upbit';

function MainPage() {
    // for Go-to-Top Button
    const [IsVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => setIsVisible(true); // for cleanup function
    }, [])
    // --- for Go-to-Top Button

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
        <>
            <NavigationBar />
            <div className="main-div">
                <img style={{margin: '3.5rem auto 0'}} src={TOPBANNER} alt="JELLING GAMES" className="main-game-thumbnail-img"/>
                {GAMES.map((item) => (
                    <Link to={'/'+item.mainUrl+'/'} className="main-game-thumbnail-link" key={item.mainUrl} onClick={onImgClick}> 
                        <img className="main-game-thumbnail-img" src={item.thumbImage} alt={item.title} />
                    </Link>
                ))}
                {commingSoonRenderer(5)}
            </div>
            <Crypto />
            <Upbit />
            {/* Go to Top Button */}
            <div className="scroll-to-top">
            {IsVisible && 
                <div onClick={scrollToTop}>
                <img src='https://images.jellinggame.com/defaultImages/go-to-top.png' alt='go to top' />
                </div>
            }
            </div>
        </>
    )
}

export default withRouter(MainPage)

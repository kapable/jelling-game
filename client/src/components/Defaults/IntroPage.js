import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import MetaTagRenderer from './MetaTagRenderer';
import NavigationBar from '../Defaults/NavBar/NavigationBar';
import STARTBTN from '../../api/DefaultImg/start-btn.png';
import PopUp from '../Ads/PopUp';
import ReactGA from 'react-ga';

function IntroPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onImgClick = () => {
        _eventSenderGA("Paging", "Click Start-game Image", 'intro page')
    }

    const onBtnClick = () => {
        _eventSenderGA("Paging", "Click Start-game Button", 'intro page')
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
            <div className="intro-game-main-div">
                <MetaTagRenderer game={props.game}/>
                <Link to={'/'+props.game.mainUrl + '/play/'} className="intro-go-to-game-img-link" onClick={onImgClick}>
                    <img src={props.game.introImage} alt={props.game.title} className="intro-img"/>
                </Link>
                <Link to={'/'+props.game.mainUrl + '/play/'} className="intro-go-to-game-btn-link" onClick={onBtnClick}>
                    <img src={STARTBTN} alt="게임 시작하기" className="intro-img" style={{margin: '0 auto'}} />
                </Link>
                <div className="intro-title-desc-div">
                    <h3 className="intro-title">{props.game.titleKor}</h3>
                    <p className="intro-desc">{props.game.descKor}</p>
                    <h3 className="intro-title">{props.game.title}</h3>
                    <p className="intro-desc">{props.game.desc}</p>
                </div>
                <Link to='/' className="intro-list-go-back-link">
                    <div
                        className="go-to-back-btn"
                        >← 메인으로 돌아가기</div>
                </Link>
                <PopUp />
            </div>
        </>
    )
}

export default withRouter(IntroPage)

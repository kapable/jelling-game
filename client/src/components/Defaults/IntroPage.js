import React, { useState, useCallback } from 'react'
import { withRouter, Link } from 'react-router-dom';
import MetaTagRenderer from './MetaTagRenderer';
import STARTBTN from '../../api/DefaultImg/start-btn.png'

function IntroPage(props) {
    const [IsGameMode, setIsGameMode] = useState(false);

    const onImgClick = useCallback(
        () => {
            setIsGameMode(true)
        },
        [],
    )
    const introRenderer =(props) => {
        return (
            <>
                <img src={props.game.introImage} alt={props.game.title} onClick={onImgClick} className="intro-img"/>
                <img src={STARTBTN} alt="게임 시작하기" onClick={onImgClick} className="intro-img"/>
                <h3 className="intro-title">{props.game.titleKor}</h3>
                <p className="intro-desc">{props.game.descKor}</p>
                <h3 className="intro-title">{props.game.title}</h3>
                <p className="intro-desc">{props.game.desc}</p>
                <Link to='/' className="intro-list-go-back-link">
                    <div
                        className="go-to-back-btn"
                        >← 메인으로 돌아가기</div>
                </Link>
            </>
        )
    }

    const gameRenderer = (props) => {
        return (
            <iframe
                title={props.game.title}
                src={props.game.sourceURL}
                className="game-iframe"
            ></iframe>
        )
    }
    return (
        <div className="intro-game-main-div">
            <MetaTagRenderer game={props.game}/>
            {IsGameMode ? gameRenderer(props) : introRenderer(props)}
        </div>
    )
}

export default withRouter(IntroPage)

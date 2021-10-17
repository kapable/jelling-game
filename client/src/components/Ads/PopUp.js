import React, { useState, useEffect } from 'react';
import './PopUp.css';

function PopUp() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])
    const [ShowPopup, setShowPopup] = useState(false);
    const onPopupBtnClick = () => {
        setShowPopup(!ShowPopup);
    };

    const popupDiv = <div className="popup">
                        <div className="popup-inner">
                            <h1 className="popup-head">POP UP!</h1>
                            <ins className="adsbygoogle"
                                style={{display:'inlineBlock', width:'300px', height:'300px'}}
                                data-ad-client="ca-pub-3646750237820161"
                                data-ad-slot="2904379914"></ins>
                            <button onClick={onPopupBtnClick}>닫기</button>
                        </div>
                    </div>

    return (
        <div className="popup-btn-div">
            <button className="popup-btn" onClick={onPopupBtnClick}>Pop UP BTN!</button>
            {ShowPopup ? 
                popupDiv
                : null}
        </div>
    )
};

export default PopUp;

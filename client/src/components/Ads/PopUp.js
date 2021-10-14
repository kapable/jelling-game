import React, { useState } from 'react';
import './PopUp.css';

function PopUp() {
    const [ShowPopup, setShowPopup] = useState(false);
    const onPopupBtnClick = () => {
        setShowPopup(!ShowPopup);
    };

    const popupDiv = <div className="popup">
                        <div className="popup-inner">
                            <h1 className="popup-head">POP UP!</h1>
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

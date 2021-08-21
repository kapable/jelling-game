import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function MobileMenu(props) {
    const [UserData, setUserData] = useState({isAuth: false})
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
        axios.get('/api/users/auth')
        .then(response => {
            setUserData(response.data)
        })
    }, [props])

    const clicker = () => {
        if (menuToggle) {
            setMenuToggle(false);
            document.querySelector('.navMenu').style.height = '3.5rem';
        } else {
            setMenuToggle(true);
            document.querySelector('.navMenu').style.height = '100%';
            document.querySelector('.mobile-nav-class').style.width = '100%';
        }
    }

    const logoutHandler = (e) => {
        e.preventDefault();
        axios.get(`/api/users/logout`).then(response => {
            if (response.status === 200) {
                props.history.push("/login");
                // window.location.reload();
            } else {
                alert('로그아웃에 실패 했습니다.')
            }
        });
    };


    if(!UserData.isAuth) {
        return (
            <Fragment>
                <button className="menu__mobile-button"
                ><div
                    className={!menuToggle ? "burger__menu" : "x__menu"}
                    onClick={clicker 
                    }>
                        <div className={`hamburger-menu-bar1`}></div>
                        <div className={`hamburger-menu-bar2`}></div>
                        <div className={`hamburger-menu-bar3`}></div>
                </div>
                </button>
                <div className={menuToggle ? "mobile__menu__wrapper" : "none"}>
                    <ul className="mobile__menu__wrapper__ul">
                        <li className="mobile__menu__wrapper__ul"><a href="/">홈</a></li>
                        <li className="mobile__menu__wrapper__ul"><a href="/login">로그인</a></li>
                        <li className="mobile__menu__wrapper__ul"><a href="/register">회원가입</a></li>
                    </ul>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <button className="menu__mobile-button"
                ><div
                    className={!menuToggle ? "burger__menu" : "x__menu"}
                    onClick={clicker 
                    }>
                        <div className={`hamburger-menu-bar1`}></div>
                        <div className={`hamburger-menu-bar2`}></div>
                        <div className={`hamburger-menu-bar3`}></div>
                </div>
                </button>
                <div className={menuToggle ? "mobile__menu__wrapper" : "none"}>
                    <ul className="mobile__menu__wrapper__ul">
                        <li className="mobile__menu__wrapper__ul"><a href="/">홈</a></li>
                        <li className="mobile__menu__wrapper__ul"><a href={`/MyPage/${UserData._id}`}>마이페이지</a></li>
                        <li className="mobile__menu__wrapper__ul"><a href="/login" onClick={logoutHandler}>로그아웃</a></li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(MobileMenu)
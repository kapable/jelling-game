import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function RightMenu(props) {
    const [UserData, setUserData] = useState({isAuth: false})

    useEffect(() => {
        axios.get('/api/users/auth')
        .then(response => {
        setUserData(response.data)
        })
    }, [props])

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

    if (!UserData.isAuth) {
        return (
            <Fragment>
                <a href="/login">로그인</a>
                <a href="/register">회원가입</a>
            </Fragment>
    )} else {
        return (
            <Fragment>
                <a href={`/MyPage/${UserData._id}`}>마이페이지</a>
                <a href="/login" onClick={logoutHandler}>로그아웃</a>
            </Fragment>
        )
    }
}

export default withRouter(RightMenu)
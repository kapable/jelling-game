import React, {  Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function MyPage(props) {
    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const userId = props.match.params.userId
        const variable = { userId: userId }

        axios.post(`/api/users/getUserInfo`, variable)
        .then(response => {
            if(response.data.success) {
                setUserInfo(response.data.userInfo)
            } else {
                alert("회원 정보를 가져오지 못했습니다.")
            }
        })
    }, [props])

    return (
        <Fragment>
            <div style={{ display: "block", margin: "15rem auto 0", justifyContent: "center", textAlign: "center"}}>
                <h1>마이페이지</h1>
            </div>
            <div style={{ display: "block", margin: "3rem auto 0", justifyContent: "center", textAlign: "center"}}>
                <h3>User Name: {`${UserInfo.name}`}</h3>
                <h3>Email: {`${UserInfo.email}`}</h3>
            </div>
        </Fragment>
    )
}

export default withRouter(MyPage)

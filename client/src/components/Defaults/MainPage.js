import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function MainPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = (e) => {
        e.preventDefault();
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push('/login')
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: "center", alignItems: "center"
            , margin: "15rem auto 0"
        }}>
            <h2>Landing Page</h2>
            <br />
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(MainPage)

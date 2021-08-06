import axios from 'axios';
import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        let body = {
            email: Email,
            password: Password
        }

        axios.post('/api/users/login', body)
        .then(response => {
            if(response.data.loginSuccess) {
                props.history.push('/')
            } else {
                alert("잘못된 메일 또는 비밀번호입니다.")
            }
        })
    }

    return (
        <Fragment>
                <div style={{
                    display: 'flex', justifyContent: "center", alignItems: "center"
                    , margin: "15rem auto 0"
                }}>
                <form style={{ display: 'flex', flexDirection: "column" }}
                    onSubmit={onSubmitHandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler}/>
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler}/>
                    <br />
                    <button type="submit">
                        로그인
                    </button>
                </form>
                </div>
                <div style={{textAlign:"center", margin: "2.5rem auto"}}>
                    <h3 >
                    젤링 회원가입
                    </h3>
                    <a  href="/register"
                        style={{
                            display: 'flex', justifyContent: "center", alignItems: "center"
                            , margin: "2rem auto"
                        }}>
                        <p>이메일로 간편가입</p>
                    </a>
                </div>
            </Fragment>
    )
}

export default withRouter(LoginPage)

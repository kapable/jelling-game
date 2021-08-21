import axios from 'axios';
import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password.length < 5) {
            return alert("비밀번호의 길이는 다섯 글자 이상이어야 합니다.")
        }

        if(Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }
        
        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        axios.post('/api/users/register', body)
        .then(response => {
            if(response.data.success) {
                props.history.push('/login')
            } else {
                alert("회원 가입에 실패했습니다.")
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
                        <label>이메일</label>
                        <input type="email" value={Email} onChange={onEmailHandler}/>
                        <label>아이디</label>
                        <input type="text" value={Name} onChange={onNameHandler}/>
                        <label>비밀번호</label>
                        <input type="password" value={Password} onChange={onPasswordHandler}/>
                        <label>비밀번호 확인</label>
                        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                        <br />
                        <button type="submit">
                            회원가입
                        </button>
                    </form>
                </div>
            </Fragment>
    )
}

export default withRouter(RegisterPage)

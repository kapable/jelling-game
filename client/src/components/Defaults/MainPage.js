import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function MainPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: "center", alignItems: "center"
            , margin: "15rem auto 0"
        }}>
            <h2>Landing Page</h2>
        </div>
    )
}

export default withRouter(MainPage)

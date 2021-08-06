import React, { useEffect } from 'react'
import axios from 'axios';

function MainPage() {
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
            <br />
        </div>
    )
}

export default MainPage

import React, { useEffect } from 'react'
import axios from 'axios';

function MainPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            MainPage
        </div>
    )
}

export default MainPage

import React, { useEffect } from 'react'

function Adsense() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])
    return (
        <ins className="adsbygoogle"
            style={{display:'inlineBlock', width:'300px', height:'300px'}}
            data-ad-client="ca-pub-3646750237820161"
            data-ad-slot="2904379914"></ins>
    )
}

export default Adsense

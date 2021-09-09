import React from 'react'
import { Helmet } from 'react-helmet';

function MetaTagRenderer(props) {
    return (
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>{props.game.title + ' 젤링 | Jelling Games'}</title>
            <meta name="title" content={props.game.title + ' 젤링 | Jelling Games'}/>
            <meta name="description" content={props.game.descKor} data-react-helmet="true"/>
            <link rel="main-url" href={window.location.href}/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={window.location.href}/>
            <meta property="og:title" content={props.game.title + ' 젤링 | Jelling Games'}/>
            <meta property="og:description" content={props.game.descKor}/>
            <meta property="og:image" content={props.game.thumbImage}/>
            <meta property="og:image:alt" content={props.game.title + ' 젤링 | Jelling Games'} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={window.location.href}/>
            <meta property="twitter:title" content={props.game.title + ' 젤링 | Jelling Games'}/>
            <meta property="twitter:description" content={props.game.descKor}/>
            <meta property="twitter:image" content={props.game.thumbImage}/>
            <meta property="twitter:image:alt" content={props.game.title + ' 젤링 | Jelling Games'} />
        </Helmet>
    )
}

export default MetaTagRenderer

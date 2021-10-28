import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainPage from './components/Defaults/MainPage';
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import MyPage from './components/Users/MyPage';
import IntroPage from './components/Defaults/IntroPage';
import GamePage from './components/Defaults/GamePage';
import Privacy from './components/Defaults/Privacy';
import Privacy2 from './components/Defaults/Privacy2';
import Footer from './components/Defaults/Footer';
import GAMES from './api/GAMES'
import TOPBANNER from './api/DefaultImg/top-banner.png'
import './App.css';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-207780789-1', {
      debug: false,
      gaOptions:{
        siteSpeedSampleRate: 100
      }
    })
    ReactGA.set({page:window.location.pathname+window.location.search})
    ReactGA.pageview(window.location.pathname+window.location.search)
  }, [])

  const mainMetaTagRenderer = () => {
    return(
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>젤링 | Jelling Games</title>
        <meta name="title" content="젤링 | Jelling Games"/>
        <meta name="description" content="젤링 | Jelling Games" data-react-helmet="true"/>
        <link rel="main-url" href={window.location.href}/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://jelling.com/"/>
        <meta property="og:title" content="젤링 | Jelling Games"/>
        <meta property="og:description" content="젤링 | Jelling Games"/>
        <meta property="og:image" content={TOPBANNER}/>
        <meta property="og:image:alt" content="젤링 | Jelling Games" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://jelling.com/"/>
        <meta property="twitter:title" content="젤링 | Jelling Games"/>
        <meta property="twitter:description" content="젤링 | Jelling Games"/>
        <meta property="twitter:image" content={TOPBANNER}/>
        <meta property="twitter:image:alt" content="젤링 | Jelling Games" />
      </Helmet>
    )
  }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Show All Game thumbnail */}
          {['/', '/m'].map((item) => (
            <Route path={item} key={"main"+item} exact>
              {mainMetaTagRenderer()}
              <MainPage />
            </Route>
          ))}
          
          {/* Login route */}
          <Route path='/login' component={LoginPage} exact />

          {/* Register route */}
          <Route path='/register' component={RegisterPage} exact />

          {/* Mypage route */}
          <Route exact path="/MyPage/:userId" component={MyPage} />

          {/* Each game intro route */}
          {GAMES.map((item) => (
            <Route
              path={'/'+item.mainUrl}
              component={() => <IntroPage game={item}/>}
              key={item.mainUrl}
              exact
            />
          ))}

          {/* Each game play route */}
          {GAMES.map((item) => (
            <Route
              path={'/'+item.mainUrl + '/play/'}
              component={() => <GamePage game={item}/>}
              key={item.mainUrl}
              exact
            />
          ))}

          {/* Privacy route */}
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/privacy2" component={Privacy2} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainPage from './components/Defaults/MainPage';
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import MyPage from './components/Users/MyPage';
import IntroPage from './components/Defaults/IntroPage';
import Footer from './components/Defaults/Footer';
import GAMES from './api/GAMES'
import TOPBANNER from './api/DefaultImg/top-banner.png'
import './App.css';

function App() {
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
          <Route path='/' exact>
            {mainMetaTagRenderer()}
            <MainPage />
          </Route>

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
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

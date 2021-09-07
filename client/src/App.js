import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage';
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import MyPage from './components/Users/MyPage';
import IntroPage from './components/Defaults/IntroPage';
import Footer from './components/Defaults/Footer';
import GAMES from './api/GAMES'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Show All Game thumbnail */}
          <Route path='/' component={MainPage} exact />

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

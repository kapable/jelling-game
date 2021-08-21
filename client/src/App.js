import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage';
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import MyPage from './components/Users/MyPage';
import GamePage from './components/Defaults/GamePage';
import Auth from './hoc/auth';
import NavBar from './components/Defaults/NavBar/NavBar';
import GAMES from './api/GAMES'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          {/* Show All Game thumbnail */}
          <Route path='/' component={Auth(MainPage, null)} exact />

          {/* Login route */}
          <Route path='/login' component={Auth(LoginPage, false)} exact />

          {/* Register route */}
          <Route path='/register' component={Auth(RegisterPage, false)} exact />

          {/* Mypage route */}
          <Route exact path="/MyPage/:userId" component={Auth(MyPage, true)} />

          {/* Each game direct route */}
          {GAMES.map((item) => (
            <Route
              path={'/'+item.mainUrl}
              component={() => <GamePage game_title={item.title} game_source={item.sourceURL}/>}
              key={item.mainUrl}
              exact
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

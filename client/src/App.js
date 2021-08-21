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
          <Route path='/' component={Auth(MainPage, null)} exact />
          <Route path='/login' component={Auth(LoginPage, false)} exact />
          <Route path='/register' component={Auth(RegisterPage, false)} exact />
          <Route exact path="/MyPage/:userId" component={Auth(MyPage, true)} />
          {GAMES.map((item) => (
            <Route
              path={'/'+item.mainUrl}
              component={() => <GamePage game_info={[item.title, item.sourceURL]}/>}
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

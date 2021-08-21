import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage'
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import Auth from './hoc/auth';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Auth(MainPage, null)} exact />
        <Route path='/login' component={Auth(LoginPage, false)} exact />
        <Route path='/register' component={Auth(RegisterPage, false)} exact />
      </Switch>
    </Router>
  );
}

export default App;

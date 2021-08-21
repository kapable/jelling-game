import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage'
import LoginPage from './components/Users/LoginPage';
import RegisterPage from './components/Users/RegisterPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

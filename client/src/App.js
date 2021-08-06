import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage'
import LoginPage from './components/Users/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/login' component={LoginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

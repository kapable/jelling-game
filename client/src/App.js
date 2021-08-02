import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Defaults/MainPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

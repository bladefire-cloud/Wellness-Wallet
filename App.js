import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import UserInfoPage from './pages/UserInfoPage';
import GoalsPage from './pages/GoalsPage';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
            <Login/>
            </Route>
        <Route exact path="/home">
          <HomePage/>
          </Route>
        <Route exact path="/goals">
          <GoalsPage/>
          </Route>
        <Route exact path="/userinfo">
          <UserInfoPage/>
          </Route>
          
      </div>
    </Router>
  );
}

export default App;

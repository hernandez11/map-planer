import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyTrips from './pages/MyTrips';
import AboutUs from './pages/AboutUs';


function App() {
  return (
      <Router>
    <div className="app">

          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path = '/Explore'>
              <Explore />
            </Route>
            <Route path = '/About-us'>
              <AboutUs />
            </Route>
            <Route path = '/My-trips'>
              <MyTrips />
            </Route>
        </Switch>
    </div>

      </Router>

  );
}
 
export default App;

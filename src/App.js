import './App.css';
import {
  HashRouter  as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Cart from './Cart';
import Segement from './Segement';
import Product from './Product';
import Account from './Account';
import Homemarv from './Homemarv';

function App() {
  return (
    <div className="homepage">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Admin.KVR"  component={Admin}></Route>
          <Route path="/Cart"  component={Cart}></Route>
          <Route path="/Account" component={Account}></Route>
          <Route path="/Segment"  component={Segement}></Route>
          <Route path="/Product"  component={Product}></Route>


        </Switch>
      </Router>
     
    </div>
  );
}

export default App;

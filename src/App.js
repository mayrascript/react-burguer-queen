import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Register from "./views/auth/register/Register";
import Login from './views/auth/Login/Login';
import Dashboard from "./layouts/dashboard/Dashboard";
import Orders from "./views/waiter/orders/Orders";
import NewOrder from "./views/waiter/new-order/NewOrder";
import SelectItem from "./views/waiter/new-order/select-item/SelectItem";

function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/d/orders">
              <Dashboard>
                <Orders />
              </Dashboard>
            </Route>
            <Route path="/d/new-order/select-item">
              <Dashboard>
                <SelectItem />
              </Dashboard>
            </Route>
            <Route path="/d/new-order">
              <Dashboard>
                <NewOrder />
              </Dashboard>
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

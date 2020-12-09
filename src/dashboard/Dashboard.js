import React  from "react";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

import './Dashboard.scss';
import Orders from "./waiter/orders/Orders";
import NewOrder from "./waiter/new-order/NewOrder";
import SelectItem from "./waiter/new-order/select-item/SelectItem";

function Dashboard() {
    return (
        <div className="dashboard">
             <Router>
                 {/*TODO: move this to a new Component*/}
                 <div className="side-menu">
                     <ul>
                         <li>
                             <Link to="/dashboard/new-order">New Order</Link>
                         </li>
                         <li>
                             <Link to="/dashboard/orders">Orders</Link>
                         </li>
                     </ul>
                 </div>
                 <Switch>
                     <Route exact path="/dashboard/new-order">
                         <NewOrder />
                     </Route>
                     <Route exact path="/dashboard/new-order/select-item">
                         <SelectItem />
                     </Route>
                     <Route exact path="/dashboard/orders">
                         <Orders />
                     </Route>
                 </Switch>
             </Router>
        </div>
    )
}

export default Dashboard;

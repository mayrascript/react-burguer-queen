import './NewOrder.scss';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function NewOrder() {
    return <div className="new-order">
        <div className="new-order">
            <h1>Burguer Queen</h1>
            <p>Order System Management</p>
            <h2>New Order</h2>

            <p>Choose an Option</p>

            <div>
                <Link to="/dashboard/new-order/select-item">Breakfast</Link>
                <Link to="/dashboard/new-order/select-item">Lunch/Dinner</Link>
            </div>

        </div>
    </div>
}

export default NewOrder;

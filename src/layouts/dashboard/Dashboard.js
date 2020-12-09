import React  from "react";
import {Link} from "react-router-dom";

import './Dashboard.scss';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="side-menu">
                <ul>
                    <li>
                        <Link to="/d/new-order">New Order</Link>
                    </li>
                    <li>
                        <Link to="/d/orders">Orders</Link>
                    </li>
                </ul>
            </div>

            {props.children}
        </div>
    )
}

export default Dashboard;

import React  from "react";

import './Orders.css';

function Orders() {
    return (
        <div className="Orders">
            <h1>Burguer Queen</h1>
            <p>Order System Management</p>
            <h2>Orders</h2>

            <div>
                <h3>Ready to Deliver</h3>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>
            </div>

            <div>
                <h3>On Preparation</h3>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>
            </div>

            <div>
                <h3>Delivered</h3>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>

                <div className="order-item">
                    <div>OR001</div>
                    <h4>Daniela Martinez</h4>
                    <span>Ready to Serve</span>
                    <button>Delivered</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;

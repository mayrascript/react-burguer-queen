import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";

import "./App.css";

import Register from "./views/auth/register/Register";
import Login from "./views/auth/login/Login";
import Dashboard from "./layouts/dashboard/Dashboard";
import Orders from "./views/waiter/orders/Orders";
import NewOrder from "./views/waiter/new-order/NewOrder";
import SelectItem from "./views/waiter/new-order/select-item/SelectItem";

export const firebaseConfig = {
    apiKey: "AIzaSyCYWxuT9DFzYDUENv9Lb2Uj-r489pOWtLU",
    authDomain: "burguer-queen-9c87b.firebaseapp.com",
    databaseURL: "https://burguer-queen-9c87b.firebaseio.com",
    projectId: "burguer-queen-9c87b",
    storageBucket: "burguer-queen-9c87b.appspot.com",
    messagingSenderId: "824615219018",
    appId: "1:824615219018:web:d079fb95f4137a1e4e1bb3",
    measurementId: "G-Q53GS6DFJ8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const usersRef = firestore.collection("users");

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

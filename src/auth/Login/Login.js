import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import './Login.css';
import {Link, useHistory} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history =  useHistory();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // TODO: Send to Login
        console.log({email, password});
        history.push("/dashboard/new-order");
    }

    return (
        <div className="Login">
            <h1>Burguer Queen</h1>
            <p>Order System Management</p>

            <h2>Welcome back!</h2>

            <Form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block">Sign In</button>
                </div>
            </Form>

            <p>I don't have an account,  <Link to="/register">Sign Up</Link></p>

            <a href="">Terms and Conditions</a>
        </div>
    );
}

export default Login;

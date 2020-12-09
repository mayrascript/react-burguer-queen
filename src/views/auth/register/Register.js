import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";

import { Link, useHistory } from "react-router-dom";

import "./Register.scss";
import { register } from "../../../services/auth.service";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    let history = useHistory();

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeRole = (e) => {
        const role = e.target.value;
        setRole(role);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await register(email, password, role);
            history.push("/d/new-order");
        } catch (error) {
            console.log("Error Signing up with email and password");
            // setError('Error Signing up with email and password');
        }
    };

    return (
        <div className="Register">
            <h1>Burguer Queen</h1>
            <p>Order System Management</p>

            <h2>Welcome!</h2>

            <Form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>

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
                    <Select name="role" value="" onChange={onChangeRole}>
                        <option value="">Choose your role</option>
                        <option value="waiter">Waiter</option>
                        <option value="chef">Chef</option>
                    </Select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
            </Form>

            <p>
                I’ve already have an account, <Link to="/login">Sign In</Link>
            </p>

            <a href="">Terms and Conditions</a>
        </div>
    );
}

export default Register;

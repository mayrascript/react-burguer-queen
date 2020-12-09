import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";

import { Link, useHistory } from "react-router-dom";

import "./Register.scss";
import { register } from "../../../services/auth.service";
import { ButtonFlatPrimary } from "../../../components/Button";
import { Paragraph, SubTitle, Title } from "../../../components/Text";
import { LinkPrimary } from "../../../components/LinkPrimary";

export const Register = (props) => {
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
        <div className="auth register">
            <Title>Burguer Queen</Title>
            <Paragraph>Order System Management</Paragraph>

            <SubTitle>Welcome!</SubTitle>

            <Form className="form" onSubmit={handleRegister}>
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
                    <ButtonFlatPrimary primary>Sign Up</ButtonFlatPrimary>
                </div>
            </Form>

            <Paragraph>
                I’ve already have an account, <LinkPrimary to="/login">Sign In</LinkPrimary>
            </Paragraph>

            <LinkPrimary href="">Terms and Conditions</LinkPrimary>
        </div>
    );
};

export default Register;

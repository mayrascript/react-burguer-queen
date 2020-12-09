import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../services/auth.service";
import { Paragraph, SubTitle, Title } from "../../../components/Text";
import { StyledInput } from "../../../components/StyledInput";
import { ButtonFlatPrimary } from "../../../components/Button";
import { StyledLink } from "../../../components/StyledLink";
import { AuthSection } from "../../../components/Sections";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { user } = await login(email, password);
            console.log("user", user);
            history.push("/d/new-order");
        } catch (e) {
            console.log("Invalid credentials");
        }
    };

    return (
        <AuthSection>
            <Title>Burguer Queen</Title>
            <Paragraph>Order System Management</Paragraph>

            <SubTitle>Welcome back!</SubTitle>

            <Form onSubmit={handleLogin}>
                <div className="form-group">
                    <StyledInput
                        placeholder="Email"
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <StyledInput
                        placeholder="Password"
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

                <div className="form-group">
                    <ButtonFlatPrimary>Sign In</ButtonFlatPrimary>
                </div>
            </Form>

            <Paragraph>
                I don't have an account, <StyledLink to="/register">Sign Up</StyledLink>
            </Paragraph>

            <StyledLink href="">Terms and Conditions</StyledLink>
        </AuthSection>
    );
}

export default Login;

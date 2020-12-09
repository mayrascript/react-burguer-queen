import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-validation/build/form";

import "./Register.scss";

import { register } from "../../../services/auth.service";
import { ButtonFlatPrimary } from "../../../components/Button";
import { Paragraph, SubTitle, Title } from "../../../components/Text";
import { StyledLink } from "../../../components/StyledLink";
import { StyledInput } from "../../../components/StyledInput";
import { StyledSelect } from "../../../components/StyledSelect";
import { AuthSection } from "../../../components/Sections";

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

        console.log({ email, password, role });

        try {
            await register(email, password, role);
            history.push("/d/new-order");
        } catch (error) {
            console.log("Error Signing up with email and password");
            // setError('Error Signing up with email and password');
        }
    };

    return (
        <AuthSection>
            <Title>Burguer Queen</Title>
            <Paragraph>Order System Management</Paragraph>

            <SubTitle>Welcome!</SubTitle>

            <Form className="form" onSubmit={handleRegister}>
                <div className="form-group">
                    <StyledInput
                        placeholder="Name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                    />
                </div>

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
                    <StyledSelect name="role" value="" onChange={onChangeRole}>
                        <option value="">Choose your role</option>
                        <option value="waiter">Waiter</option>
                        <option value="chef">Chef</option>
                    </StyledSelect>
                </div>

                <div className="form-group">
                    <ButtonFlatPrimary primary>Sign Up</ButtonFlatPrimary>
                </div>
            </Form>

            <Paragraph>
                I’ve already have an account, <StyledLink to="/login">Sign In</StyledLink>
            </Paragraph>

            <StyledLink href="">Terms and Conditions</StyledLink>
        </AuthSection>
    );
};

export default Register;

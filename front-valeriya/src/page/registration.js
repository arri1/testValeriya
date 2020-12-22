import React, { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import styled from "styled-components";
import { REGISTER_USER } from "../gqls/mutations";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Container = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.form`
    position: absolute;
    left: 15.57%;
    right: 15.57%;
    top: 39.67%;
    bottom: 54.04%;
`;
const Title = styled.h1`
    position: absolute;
    left: 19.95%;
    right: 19.95%;
    top: 2.87%;
    bottom: 91.11%;

    font-family: Arial;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    text-align: center;

    color: #383838;
`;
const LogoImg = styled.img`
    position: absolute;
    width: 269px;
    height: 131px;
    left: 71px;
    top: 125px;
`;

const Input = styled.input`
    height: 46px;
    width: 283px;

    margin-bottom: 10px;
    border: 5px solid #4c75b8;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 5px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 29px;

    color: #4c75b8;
`;
const Button = styled.button`
    position: absolute;
    height: 46px;
    width: 283px;
    left: 15.57%;
    right: 15.57%;
    top: 74.15%;
    bottom: 19.56%;
    border-radius: 8px;

    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    background: #4c75b8;
    color: white;
`;

const Registration = () => {
    const client = useApolloClient();
    const history = useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [onReg] = useMutation(
        REGISTER_USER,

        {
            onCompleted: ({ registerUser: { user, token } }) => {
                localStorage.setItem("token", token);
                client.writeQuery({ query: REGISTER_USER, data: { user } });
                console.log(user);
                history.replace("signIn");
            },
            onError: ({ message }) => {
                console.log(message);
            },
        }
    );

    const submit = (e) => {
        onReg({
            variables: {
                data: {
                    login,
                    password,
                    name,
                },
            },
        });
        e.preventDefault();
    };

    return (
        <Container onSubmit={submit}>
            <Title>Регистрация</Title>
            <LogoImg src={"/images/logo.png"} />
            <InputContainer>
                <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    name={"login"}
                    placeholder="Логин"
                />
                <Input
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                />
                <Input
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
            </InputContainer>
            {/* <Link to="signIn"> */}
            <Button type={"submit"}>Регистрация</Button>
            {/* </Link> */}
        </Container>
    );
};

export default Registration;

import React, { useState } from "react";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import { USER } from "../gqls/queries";
// import { AsyncStorage } from "@react-native-community/async-storage";
import { useHistory } from "react-router-dom";
import { AUTH_USER } from "../gqls//mutations";
// import { AuthenticationError } from "apollo-server";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.div`
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

const SignIn = () => {
    const client = useApolloClient();
    const history = useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [onAuth, { loading, error }] = useMutation(AUTH_USER, {
        onCompleted: ({ authUser: { user, token } }) => {
            localStorage.setItem("token", token);
            client.writeQuery({ query: USER, data: { user } });
            history.replace("home");
        },
        onError: (error) => {},
    });
    if (loading) return <div>loading...</div>;
    // if (error) return <div>try again...</div>;
    const onClick = (e) => {
        // if (login === ) {
        //     return
        // }
        // if (password === ) {
        //     return
        // }
        onAuth({
            variables: {
                data: {
                    login,
                    password,
                },
            },
        });
        e.preventDefault();
    };

    return (
        <Container>
            <Title>Вход</Title>
            <LogoImg src={"/images/logo.png"} />
            <InputContainer>
                <Input
                    value={login}
                    placeholder="Логин"
                    onChange={(e) => setLogin(e.target.value)}
                />
                <Input
                    value={password}
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputContainer>
            <Button onClick={onClick}>Вход</Button>
        </Container>
    );
};

export default SignIn;

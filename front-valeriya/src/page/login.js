import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const ButtonContainer = styled.div`
    width: 280px;
    margin: 0 100%;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    height: 46px;
    width: 283px;
    margin-bottom: 20px;
    background: ${(props) => (props.primary ? "#4c75b8" : "transparent")};
    color: ${(props) => (props.primary ? "white" : "545454, 100%")};
    border: ${(props) => (props.primary ? "none" : "5px solid #4c75b8")};
`;

const Logo = styled.img`
    width: 300px;
    margin: 0 100%;
    margin-top: 30%;
    margin-bottom: 100px;
`;

const Login = () => {
    return (
        <Container>
            <Logo src={"/images/logo.png"} />
            <ButtonContainer>
                <Link to="registration">
                    <Button primary href="{}">
                        Регистрация
                    </Button>
                </Link>
                <Link to="signIn">
                    <Button>Вход</Button>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export default Login;

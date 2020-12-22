import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Navbar from "../components/navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { USER } from "../gqls/queries";
import { FIND_MANY_POST } from "../gqls/queries";

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
const Slader = styled.div`
    margin-top: 50px;
    width: 300px;
    overflow-x: scroll;
`;

const Box = styled.div`
    margin: 10px;
    height: 132px;
    width: 242px;
    padding: 10px;
    border: 5px solid #4c75b8;
    box-sizing: border-box;
    border-radius: 12px;
`;

const LogoImg = styled.img`
    width: 300px;
    margin: 0 100%;
    margin-top: 20%;
    margin-bottom: 100px;
`;

const Home = () => {
    const [userId, setUserId] = useState();
    const { data: postsData, loading: postsLoading } = useQuery(FIND_MANY_POST);

    const { data: userData, loading: userLoading } = useQuery(USER, {
        onError: () => {},
        onCompleted: ({ user }) => {
            setUserId(user.id);
            console.log(user.id);
        },
        variables: {
            id: userId,
        },
    });

    const fetchUserName = () => {
        if (userLoading) return <p>Loading ...</p>;
        return userData.user.name;
    };
    const fetchPosts = () => {
        if (postsLoading) return <p>Loading ...</p>;
        return postsData.findManyPost.map((item) => {
            return <Box>{item.title}</Box>;
        });
    };

    return (
        <Container>
            <Navbar></Navbar>

            <LogoImg src={"/images/logo.png"} />
            <div style={{ marginTop: -120 }}>Привет, {fetchUserName()}!</div>

            <ButtonContainer>
                <Link to="home">
                    <Button primary href="{}">
                        Уровни
                    </Button>
                </Link>
                <Link to="home">
                    <Button primary>Настройки</Button>
                </Link>
            </ButtonContainer>

            <Slader>{fetchPosts()}</Slader>
        </Container>
    );
};

export default Home;

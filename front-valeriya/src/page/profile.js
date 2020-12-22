import React, { usestate } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import useQuery from "@apollo/client";
import USER from "../gqls/queries";
const Container = styled.div``;
const Pfp = styled.img`
    height: 95px;
    width: 95px;
    margin-left: 158px;
    margin-top: 48px;
    border-radius: 0px;
`;
const Text = styled.p`
    width: 182px;
    height: 29px;
    margin-left: 46px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    color: #323232;
`;

const Profile = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Pfp src={"./images/pfpBig.png"}></Pfp>
            <Text>qswdefgr</Text>
            <Text>wefgr</Text>
        </Container>
    );
};

export default Profile;

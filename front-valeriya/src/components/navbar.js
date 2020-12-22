import React, { Profiler } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navigation = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    vertical-align: middle;
    padding-top: 15px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
    height: 27px;
    width: 115px;
    margin: 0 40px;
`;

const Profile = styled.img`
    height: 38px;
    width: 38px;
    margin-top: -5px;
`;

const Menu = styled.img`
    height: 28px;
    width: 32.666664123535156px;
`;

const Navbar = () => {
    let history = useHistory();

    function handleClick() {
        history.push("profile");
    }
    return (
        <Navigation>
            <Menu src={"/images/burger.png"}></Menu>
            <Logo src={"/images/TutyCash.png"} />
            <Profile src={"/images/pfp.png"} onClick={handleClick}></Profile>
        </Navigation>
    );
};

export default Navbar;

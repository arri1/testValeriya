import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`
const SignupButton = styled.button`
    padding: 10px 20px;
    border: none;
    background: #4C75B8;
    border-radius: 8px;
    color: white;
`

const Logo = styled.img`
  width:100px;
`;

const  Login= ()=>{
    return (
        <Container>
            <Logo src={'/images/book.png'} />
            <SignupButton>Регистрация</SignupButton>

        </Container>
    )
}

export default Login

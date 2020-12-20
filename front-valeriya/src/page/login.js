import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
`

const  Login= ()=>{
    return (
        <Container>
            <img alt={'book'} src={'/images/book.png'}/>
        </Container>
    )
}

export default Login

import React from 'react'
import {styled} from "styled-components";

const Container = styled.div`
width: 100%;
max-width:500px;
display :flex;
flex-direction: column;
gap:36px;

`;
const Title = styled.div`
font-size: 30px;
font-weight: 800;
color : ${({ theme }) => theme.text_primary};`;
const Span = styled.span`
  `;
  
const Signin = () => {
  return (
    <Container>
        <div>
            <Title>Welcome to Fittrack</Title>
            <Span>Please login with your details</Span>
        </div>
    </Container>
  )
}

export default Signin
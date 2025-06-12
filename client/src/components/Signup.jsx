import React from 'react'
import {styled} from "styled-components";
import TextInput from './TextInput';
import Button from './Button';
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
            <Title>Create You Account</Title>
            <Span>Please login with your details</Span>
        </div>
        <div style = {{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
        }}>

     <TextInput Label = "FullName" placeholder ="Enter your FullName " />       
    <TextInput Label = "Email Address" placeholder ="Enter your Email Address " />
    <TextInput Label = "Password" placeholder ="Enter your Password" type = "password" />

<Button text="SignIn"></Button>
        </div>
    </Container>
  )
}

export default Signin
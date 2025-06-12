import React from 'react'
import styled from 'styled-components';
import LogoImg from '../utils/Images/Logo.png';
import { Link as LinkR, NavLink } from 'react-router-dom';
import { MenuRounded } from '@mui/icons-material';

const NavContainer = styled.div`
width :100%;
max-width:1400px;
padding: 0 24px;
display:flex;
gap :14px;
align-items: center;
justify-content: space-between;
font-size: 1rem;

`;
const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 80px;
display : flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top :0;
z-index: 10;
color:white;
border-bottom: 1px solid ${({ theme }) => theme.border_primary};
`;
const NavLogo = styled(LinkR)`
width: 100%;
display: flex;
align-items: center;
gap: 16px;
padding: 0 6px;
font-weight: 600;
font-size:18px;
text-decoration: none;
color: ${({ theme }) => theme.black};


`;
const Logo = styled.img`
height: 42px;
`;

const Mobileicon = styled.div`
color: ${({ theme }) => theme.text_primary};
display :none;
@media screen and (max-width: 768px) {
display :flex;
align-items: center;

`;

const NavItems = styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 32px;
padding: 0 6px;
list-style: none;
@media screen and (max-width: 768px) {
display :none;

`;

const Navlink = styled(NavLink)`
display: flex;
align-items: center;
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 1s slide-in;
text-decoration: none;

&:hover{
color: ${({ theme }) => theme.primary};
border-bottom: 2px solid ${({ theme }) => theme.primary};
`;


const Navbar = () => {
  return (
    <Nav>
    <NavContainer>
        <Mobileicon>
<MenuRounded sx= {{color:"inherit" }} ></MenuRounded>


        </Mobileicon>
    <NavLogo to ="/">
    <Logo src ={LogoImg}/>
    Fittrack

    </NavLogo>


    <NavItems> 

        <Navlink to ="/">Dashboard</Navlink>
        <Navlink to ="/workouts">workouts</Navlink>
        <Navlink to ="/tutorials">Tutorial</Navlink>
        <Navlink to ="/blogs">Blogs</Navlink>
        <Navlink to ="/contacts">Contacts</Navlink>






    </NavItems>
    </NavContainer>
    </Nav>
  )
}

export default Navbar

import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'
import "../assets/css/styles.css"
import {NavDropdown} from "react-bootstrap"

//styled components start
const Container = styled.div`
    height: 60px;
    ${mobile({height: "44px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
color: teal;
font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray; 
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
font-weight: 600;
    font-size: 16px;
    border: none;
    ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "18px" })}
    color: teal;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    transform: scale(1.2);
    }
`
const Center = styled.button`
    flex: 1;
    text-align: center;
    border: none;
    background-color: transparent;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size:15px;
    cursor: pointer;
    margin-left: 25px; 
    transition: all 0.5s ease;
    &:hover {
    color: teal; 
    transform: scale(1.1);
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    }
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search Products" style={{color:"teal"}}/>
                    <Search style={{color:"black"}}/>
                </SearchContainer>
            </Left>
            <Link to = "/"><Center><Logo>Oriental-Goods.</Logo></Center></Link>   
            <Right>
                <Link to = "/register" className = "btn-register">REGISTER</Link>
                <Link to ="/login" className = "btn-signin">LOG-IN</Link>
                <Link to = "/profile" className= "btn-dashboard">ACCOUNT</Link>
                <MenuItem>
                <Link to ="/cartitems"><Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                </Badge></Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container> 
  )
}

export default Navbar
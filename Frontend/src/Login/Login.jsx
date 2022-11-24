import styled from "styled-components"
import { useState } from 'react'
import { Link } from "react-router-dom";
// import AuthContext from '../context/AuthProvider.js'
import { LoginBanner } from "../data.js"
import axios from '../api/axios';


const LOGIN_URL = '/login';

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Image = styled.img`
    width: 62vw;
    height: 100vh;
    object-fit: cover;
`

const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: transparent;
`

const Title=styled.h1`
    font-size: 30px;
    font-weight: 800;
`

const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    font-size: 20px;
    flex:1; 
    min-width: 40%;
    margin: 10px 0px;
    padding: 8px;
    font-family: Verdana;
    letter-spacing: 0.125em;
`

const Button=styled.button`
    font-weight: 600;
    width: 25%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    transform: scale(1.1);
    background-color: #c08ab7; 
  }
`

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const onChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    };

    const { username, password } = inputs;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const body = { username, password};

            const response = await axios.post(LOGIN_URL, JSON.stringify(body), {
                headers: { 'Content-Type': 'application/json'},
                // withCredentials: true
                }
            );
            const parseRes = response?.data;

            if (parseRes.token){
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
            } else {
                setAuth(false);
                console.log("Please try again!")
            }
        }catch(error){
            console.error(error.message)
        }
    };

  return (
    <Container>
            {LoginBanner.map(item=>(
            <Image src={item.img}/>
        ))}
        <Wrapper>
            <Title>WELCOME TO ORIENTAL GOODS!</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username" className="label-username">Username:</label>
                <Input 
                type = "username"
                name = "username"
                id="username"
                value={username}
                autoComplete="off"
                onChange={(e) => {
                    onChange(e)
                }}
                required/>

                <label htmlFor="password" className="label-password">Password:</label>
                <Input 
                type="password"
                name = "password"
                id="password" 
                value={password}
                onChange={(e) => {
                    onChange(e)
                }}
                required/>
                
                <Button>LOGIN</Button>
                <Link className="login-forgotpw">FORGOT PASSWORD?</Link>
                <Link className="login-register-direct" to = "/register">CREATE A NEW ACCOUNT</Link>
            </Form> 
        </Wrapper>
    </Container>
            )}
//         </>
//     )     
// }

export default Login 
import styled from "styled-components"
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider.js'
import Home from "./Home"

import axios from '../api/axios';
const LOGIN_URL = '/signup';

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6243246/pexels-photo-6243246.jpeg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper=styled.div`
    width: 25%;
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
const Input=styled.input`
    flex:1; 
    min-width: 40%;
    margin: 10px 0px;
    padding: 8px;
`

const Button=styled.button`
    width: 25%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 15px;
    font-weight:500;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    background-color: #c08ab7; 
  }
`

const Link=styled.a`
    margin: 5px 0px;
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    &:hover { 
    transform: scale(1.1);
  }
`

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username:user, password:pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            setAuth({user, pwd, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);
        }catch(err){
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

   
    }

  return (
    <>
        {success ? (
            <section>
               <Home/>
            </section>
        ) : (
    <Container>
        <Wrapper>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <Input 
                type = "user"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required/>

                <label htmlFor="password">Password:</label>
                <Input
                type="password"
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required/>
                
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link to ="/register">CREATE A NEW ACCOUNT</Link>
            </Form> 
        </Wrapper>
    </Container>
            )}
        </>
    )     
}

export default Login 
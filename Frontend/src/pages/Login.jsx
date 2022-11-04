import styled from "styled-components"
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider.js'
import { LoginBanner } from "../data.js"
import Home from "./Home"

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

const Link=styled.a`
    margin-top: 20px;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
    color: teal; 
    font-weight: 700;
    }
`

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                ({username: username, password: password}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    // withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            setAuth({username, password, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);
        }catch(err){
            if (err?.response) {
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
               <Home />
            </section>
        ) : (
    <Container>
            {LoginBanner.map(item=>(
            <Image src={item.img}/>
        ))}
        <Wrapper>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Title>WELCOME TO ORIENTAL GOODS!</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="username" className="label-username">Username:</label>
                <Input 
                type = "username"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={username}
                required/>

                <label htmlFor="password" className="label-password">Password:</label>
                <Input 
                type="password"
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required/>
                
                <Button className="btn-actual-login">LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link to = "/register">CREATE A NEW ACCOUNT</Link>
            </Form> 
        </Wrapper>
    </Container>
            )}
        </>
    )     
}

export default Login 
import styled from "styled-components"
import { useState } from 'react';
import { Link } from "react-router-dom"
import axios from '../api/axios';

const register_url = '/register';


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
    flex-wrap: wrap;
`

const Input=styled.input`
    flex:1; 
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 8px;
`

const Agreement=styled.span`
    font-size: 15px;
    margin: 20px 0px;
    &:hover {
        cursor: pointer;
    }
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
    transform: scale(1.1);
  }
`

const Register = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        lastname: "",
        firstname: "",
        email: "",
        username:"",
        password: "",
        confirm: "",
      });
    const [success] = useState(false);
    const { lastname, firstname, email, username, password, confirm  } = inputs; 

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };
    
    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = {
            lastname: lastname,
            firstname: firstname,
            email: email,
            username: username,
            password: password,
            confirm: confirm,
            };
            const response = await axios.post(register_url, JSON.stringify(body), {
              headers: {
                "Content-Type": "application/json",
              },
            });
            
            const parseRes = await response?.data;

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
              } else {
                setAuth(false);
                console.log("Something went wrong");
              }
            } catch (error) {
              console.error(error.message);
              console.log(error?.response?.data);
            }
          };

  return (
    <>  {success ? (
            <section>
               <h1>YOU HAVE SUCCESSFULLY CREATED YOUR ACCOUNT</h1>
               <Link to = "/login">GO back to Login Screen </Link>
            </section>
        ) : (
    <Container>
        <Wrapper>
            <Title>CREATE YOUR ACCOUNT</Title>
            <Form onSubmit={onSubmitForm}>
                <Input 
                name = "lastname"
                type="lastname"
                id="lastname"
                placeholder="Last Name"
                value={lastname}
                required
                onChange={(e) => {
                  onChange(e);
                }}/>

                <Input
                type = "firstname"
                id="firstname"
                name = "firstname"
                placeholder="First Name"
                value={firstname}
                required
                onChange={(e) => {
                  onChange(e);
                }}/>
                
                <Input 
                type = "email"
                id="email"
                name = "email" 
                placeholder="Email Address"
                value={email}
                autoComplete="email"
                required
                onChange={(e) => {
                  onChange(e);
                }}/>

                <Input
                name = "username" 
                type="text"
                value={username}
                id="username"
                placeholder="Username"
                required
                onChange={(e) => {
                  onChange(e);
                }}/>

                <Input 
                type="password"
                id="password" 
                name="password"
                value={password}
                autoComplete="current-password"
                placeholder="Password"
                required
                onChange={(e) => {
                  onChange(e);
                  }}/>
              
                <Input 
                type="password"
                id="confirm" 
                name="confirm"
                value={confirm}
                placeholder="Confirm Password"
                onChange={(e) => {
                  onChange(e);
                }}/>

                <Agreement>
                    By creating an account here at Oriental Goods, 
                    I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY.</b>
                </Agreement>
                <Button>CREATE</Button>
                <Link to="/login" className="btn-registerpage-login">Go to Login Page</Link>
            </Form>
        </Wrapper>
    </Container>
          )}
    </>
  )
}

export default Register
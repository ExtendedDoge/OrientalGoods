import styled from "styled-components"


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
    font-size: 14px;
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
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE YOUR ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email Address"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY.</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
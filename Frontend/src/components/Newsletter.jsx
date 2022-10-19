import { Send } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`

const Desc = styled.div`
    font-size: 30px;
    font-weight: 800px;
    margin-bottom: 30px;
`


const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`


const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 21px;
`


const Button = styled.button`
    flex: 1;
    border: none;
    color: #fcf5f5;
    background-color: #7ba8e2;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    color: #0e4646; 
    transform: scale(1.2);
  }
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>SIGN UP AND AVAIL OUR BUY 1, TAKE 1 PROMO!  </Desc>
        <InputContainer> 
            <Input placeholder="Your Email Address"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
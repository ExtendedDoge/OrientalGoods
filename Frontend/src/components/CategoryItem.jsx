import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3.5px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #000000;
    margin: 30px;
    font-size: 100;
    font-weight: 1000;
    background-color: white;
`
const Button = styled.button`
    font-size: 18px;
    font-weight: 500;
    border: none;
    padding:10px;
    background-color: #ffffff;
    color: black;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    color: teal; 
    transform: scale(1.2);
    }
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to = "/delicacylist"><Button>SHOP NOW</Button></Link>
            <Link to = "/clothinglist"><Button>SHOP NOW</Button></Link>
            <Link to = "/blingslist"><Button>SHOP NOW</Button></Link>
        </Info>
    </Container>
  )
}

export default CategoryItem
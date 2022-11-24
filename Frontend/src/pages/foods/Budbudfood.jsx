import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../../components/Announcement"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Newsletter from "../../components/Newsletter"
import { DelicacyTreats1 } from "../../data.js"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image= styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;
`
const Title = styled.h1`
  font-weight: 500;
`
const Desc = styled.p`
  font-size: 21px;
  margin: 19px 0px;

`
const Price = styled.span`
  font-weight: 200;
  font-size: 50px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px; 
  border-radius: 50%;
  background-color:${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  padding: 6px;
  font-weight: 400;
`

const AmountContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  width: 150px;
  font-size: 17px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
  color: teal;
  background-color: #fcf5f5; 
  transform: scale(1.1);
  }
`

const Manufacturer = styled.h1`
  text-indent: 5px;
  margin-top: 10px;
  font-size: 20px;
`

const Budbudfood = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
        {DelicacyTreats1.map(item=>(
            <Image src={item.img}/>
        ))}
        </ImgContainer>
        <InfoContainer>
            <Title>8pc Assorted Budbud (Rice Cake)</Title>
            <Manufacturer>By: Chef Ravin Opana</Manufacturer>
            <Desc>Sticky Rice Cake wrapped in Banana Leaves. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur quos minus amet pariatur suscipit quae possimus nam, sed deserunt ex reprehenderit, labore tempore laborum. Architecto repudiandae maiores optio ducimus?</Desc>
            <Price>Php 200.00</Price>
            <FilterContainer>
              <Filter>
              <AmountContainer>
                <Remove style = {{fontSize:"30px",cursor:"pointer"}}/>
                <Amount style = {{fontSize:"25px"}}>0</Amount>
                <Add style = {{fontSize:"30px",cursor:"pointer"}}/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
              </Filter>
            </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Budbudfood
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Container=styled.div``

const Wrapper=styled.div`
    padding: 20px;
`

const Title=styled.h1`
    font-weight: 800;
    text-align: center;
`

const Top=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.div`
  border-style: solid;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type==="filled" && "none"};
  background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
  color: ${props=>props.type==="filled" && "white"};
`
const TopTexts=styled.div``

const TopText=styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom=styled.div`
  display: flex;
`
const Info=styled.div`
  flex: 3;
`

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary=styled.div`
  flex: 1;
  border: 0.5px solid teal;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle=styled.h1`
  font-weight: 400;
`

const SummaryItem=styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && "500"};
  font-size: ${props=>props.type==="total" && "25px"};
`

const SummaryItemText=styled.span``

const SummaryItemPrice=styled.span``

const Button=styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease;
    &:hover {
    transform: scale(1.1);
  }
`


const Product=styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail=styled.div`
  flex: 2;
  display: flex;
`

const Image=styled.img`
  width: 200px;
`

const Details=styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const PriceDetail=styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer=styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount=styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice=styled.div`
  font-size: 30px;
  font-weight: 300;
`


const ProductName=styled.span``

const ProductId=styled.span``

const ProductColor=styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`
const ProductSize=styled.span`` 


const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
           <TopText>Shopping Bag(2)</TopText>
           <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://content.instructables.com/ORIG/FTW/XKYL/IDUQWO4B/FTWXKYLIDUQWO4B.jpg"/>
                <Details>
                  <ProductName><b>Product: </b>ISLAND BOYS TIE DYE SHIRT</ProductName>
                  <ProductId><b>ID: </b>001</ProductId>
                  <ProductColor color="violet"/>
                  <ProductSize><b>Size:</b>37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Php400.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0698/8097/products/rainbow_540x.png"/>
                <Details>
                  <ProductName><b>Product: </b>ISLAND BOYS TIE DYE PANTS</ProductName>
                  <ProductId><b>ID: </b>001</ProductId>
                  <ProductColor color="violet"/>
                  <ProductSize><b>Size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Php500.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>Php 900.00</SummaryItemPrice> 
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Fee: </SummaryItemText>
              <SummaryItemPrice>Free Shipping</SummaryItemPrice> 
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount Applied: </SummaryItemText>
              <SummaryItemPrice>Php 200.00</SummaryItemPrice> 
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total Amount: </SummaryItemText>
              <SummaryItemPrice>Php 700.00</SummaryItemPrice> 
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
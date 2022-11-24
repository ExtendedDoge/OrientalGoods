import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@material-ui/icons"
import styled from "styled-components"
import { PaymentBanner } from "../data"

const Container = styled.div`
    display: flex;

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``


const Desc = styled.p`
text-indent: 10%;
    font-size: 18px;
    margin: 20px 0px;
`


const SocialContainer = styled.div`
    display: flex;
`


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 650;
`

const List = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
font-size: 18px;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 65%;
`

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>Oriental-Goods.</Logo>
        <Desc>
        We at Oriental-Goods provide high-quality handmade products with artistic style. Also, we make sure our delicacies are scrumptious and at the same, affordable. We want our customers to have a complete and delightful experience just by checking our products. 
        </Desc>
        <SocialContainer>
            <SocialIcon color = "3B5998">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color = "E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color = "55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color = "E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
    </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Pasalubong</ListItem>
            <ListItem>Apparel</ListItem>
            <ListItem>Souvenirs</ListItem>
            <ListItem>My Account</ListItem> 
            <ListItem>Reviews</ListItem>
            <ListItem>Track my Order</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and Conditions</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact Us</Title>  
        <ContactItem><Room style={{marginRight:"10px"}}/>
            Sitio San Jose, Bais City, Negros Oriental, Philippines. 
        </ContactItem> 
        <ContactItem><Phone style={{marginRight:"10px"}}/>
            123 4567 // 09981234579  
        </ContactItem> 
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>
            contact-oriental.goods@gmail.com
        </ContactItem> 
        {PaymentBanner.map(item=>(
            <Payment src={item.img}/>
        ))}
    </Right>        
    </Container>
  )
}

export default Footer
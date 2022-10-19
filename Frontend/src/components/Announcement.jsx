import styled from "styled-components"
import Marquee from "react-fast-marquee";


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
      <Marquee>
        Your # 1 Souvenirs and Delicacies Shop! Save more up to 70%! 
        </Marquee>
    </Container>
    
  )
}

export default Announcement
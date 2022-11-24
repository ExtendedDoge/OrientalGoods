import Announcement from '../components/Announcement'
import React, { useEffect, useState }from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import axios from '../api/axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const PROFILE_URL = "/myprofile";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 800px;
    margin-bottom: 20px;
`

const ContentContainer = styled.div`
justify-content: center;
    font-size: 30px;
    font-weight: 800px;
    margin-bottom: 20px;
`

const Content = styled.h5`
  font-size: 20px;
  font-weight: 500;
`

const LogoutContainer = styled.div`
  flex-direction: row;
  justify-content: center;
`

const Logout = styled.button`
    width: 100px;
    font-size: 18px;
    border: none;
    padding: 20px 20px;
    background-color: teal;
    color: white;
    font-weight:500;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    background-color: #420c39; 
    transform: scale(1.1);
  }
`

const ButtonNav = styled.button`
      width: 250px;
    font-size: 18px;
    border: none;
    padding: 20px 20px;
    background-color: teal;
    color: white;
    font-weight:500;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    background-color: #420c39; 
    transform: scale(1.1);
    }
`

const Dashboard = ({ setAuth }) => {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [username, setUsername] = useState("");

  const getProfile = async () => {
    try {
      const response = await axios.get(PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      const parseRes = await response?.data;
      setFName(parseRes.firstname);
      setLName(parseRes.lastname);
      setUsername(parseRes.username);
      // console.log(parseRes);
    } catch (error) {
      console.log(error?.response)
      console.error(error.message);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  };

  const navigate = useNavigate();
  const AddItem = () => {
    navigate('/additems');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
        <Announcement />
        <Navbar />
        <Container>
        <Title>Account Profile</Title>
        <ContentContainer>
          <Content>{firstname} {lastname}</Content>
          <Content>{username}</Content>
        </ContentContainer>
        <ContentContainer>
          <ButtonNav onClick={AddItem}>Add Items for Sale</ButtonNav>
        </ContentContainer>
        <LogoutContainer>
            <Logout onClick={(e) => handleLogout(e)}>Logout</Logout>
        </LogoutContainer>
        </Container>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Dashboard
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import axios from "../api/axios.js"
import { Navigate } from 'react-router-dom'

//styled components section
const Container = styled.div`
    margin-bottom: 1px;
`
const Welcome = styled.h1`
  color: teal;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
  transform: scale(1.2);
  }
`
const Desc = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
    
`
const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  margin-left: 20px;
  min-width: 46%;
`

const Textarea = styled.input`    
  font-size: 18px;
  flex:1; 
  min-width: 40%;
  margin: 1px 20px 10px;
  padding: 4px;
`
const Button = styled.button`
  position: absolute;
  left: 1115px;
  top: 435px; 
  font-weight: 600;
  width: 16%;
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
const Img = styled.image`
  margin-left: 100px;
`
//end styled components section

//API URL backend
const NEW_ITEMS_FOR_SALE = "/user/itemsforsale";

const AddItems = () => {
  const [productname, setProductname] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [files, setFiles] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productname", productname);
    formData.append("manufacturer", manufacturer);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("color", color);

    for (let image = 0; image < files.length; image++) {
      formData.append("file", files[image]);
    }

    try {
      const response = await axios.post(NEW_ITEMS_FOR_SALE, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 && response.status === "OK") {
        e.target.reset();
      }
      <Navigate to="/profile" />;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Welcome> SELLER SECTION </Welcome>
      <Desc>Got any items to sell? Sell it now!</Desc>
      <Form onSubmit={(e)=>{
        onSubmitForm(e);
      }} encType="multipart/form-data">
        <Label htmlFor="Productname">Product Name:</Label>
        <Textarea
          id="productname"
          name="productname"
          type="text"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setProductname(value);
          }}></Textarea>

        <Label htmlFor="Manufacturer">Manufacturer:</Label>
        <Textarea
          id="manufacturer"
          name="manufacturer"
          type="text"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setManufacturer(value);
          }}></Textarea>

        <Label htmlFor="Description">Description:</Label>
        <Textarea
          id="description"
          type="text"
          name="description"
          rows="2"
          cols="25"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setDescription(value);
          }}></Textarea>

        <Label htmlFor="Price">Price:</Label>
        <Textarea
          id="price"
          type="decimal"
          name="price"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setPrice(value);
          }}></Textarea>

        <Label htmlFor="Color">Color:</Label>
        <Textarea
          id="color"
          type="text"
          name="color"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setColor(value);
          }}></Textarea>

        <Label htmlFor="Size">Size:</Label>
        <Textarea
          id="size"
          name="size"
          type="text"
          required
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setSize(value);
          }}></Textarea>

        <Label htmlFor="file">Add Image:</Label>
        <Textarea
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files;
            setFiles(file)
            // setFiles(URL.createObjectURL(event.target.files));
          }}></Textarea>
        <Button type="submit">Submit</Button>
      </Form>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default AddItems
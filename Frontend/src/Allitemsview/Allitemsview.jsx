import React, { useEffect, useState} from 'react'
import axios from "../api/axios.js"
import ItemsClass from "../DataContainerForItems/Datacontainer"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import imageUrl from "../components/ImageRoute"

const ALL_ITEMS_FOR_SALE = "/user/added-items"

const Container = styled.div`
    display: flex;
`

const ItemsContainer = styled.div`
    display: flex;
    `
 const List = styled.List`
    display: flex;
 `


const Allitemsview = () => {
    const [itemsAdded, setitemsAdded] = useState([]);
    const [itemProductname, setProductname] = useState("");
    // const [itemManufacturer, setManufacturer] = useState("");
    const [itemDescription, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [pesoSign, setPesoSign] = useState("");

    const [itemsListing, setItemsListing] = useState([    {
        "product_id": "34",
        "productname": "Oppo Phone Reno 8",
        "manufacturer": "Oppo",
        "description": "Android 13",
        "price": "21000.00",
        "color": "None",
        "size": "None",
        "image3": "2023-02-08-18-36-32-162223834.PNG"
    }]);
    // const [color, setColor] = useState("");
    // const [size, setSize] = useState("");

    const getUserAddedItems = async () => {
        try {
            const response = await axios.get(ALL_ITEMS_FOR_SALE, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const parseRes = await response?.data;
            console.log(parseRes)

            // const itemsListing = parseRes.map((item) => {
            //     return new ItemsClass ({
            //         product_id: item.product_id,
            //         productname: item.productname,
            //         manufacturer: item.manufacturer,
            //         description: item.description,
            //         price: item.price,
            //         color: item.color,
            //         size: item.size,
            //         image3: `${image3}/$(item.image3)`
            //     });
            // });

            setitemsAdded(itemsAdded);
        } catch(error) {
            console.log(error);
            console.error(error.message)
        }
    };

    useEffect(() => {
        getUserAddedItems();
    })
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <ItemsContainer>
        <List>
        {itemsListing.length !==0 && itemsListing[0].product_id !== null && itemsListing.map((item) => {
            return (
                <li key={item.product_id}>
                    <figure>
                        <img src = {item.image3}
                        alt = {item.description}
                        loadings = "lazy"></img>
                    </figure>
                    <div>
                        <h3>{price}</h3>
                        <p>
                            {pesoSign}
                            {item.price}
                        </p>
                    </div>
                    <div>
                        <h3>{itemDescription}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div>
                        <h3>{itemProductname}</h3>
                        <p>{item.productname}</p>
                    </div>
                </li>
            )
        })}
        </List>
        </ItemsContainer>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Allitemsview
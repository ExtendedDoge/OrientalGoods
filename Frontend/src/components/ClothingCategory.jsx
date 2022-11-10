import styled from "styled-components"
import {ClothingSection} from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f5fbfd;
`

const Products = () => {
  return (
    <Container>
        {ClothingSection.map(item =>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
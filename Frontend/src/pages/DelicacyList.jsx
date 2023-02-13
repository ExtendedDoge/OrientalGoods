import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import DelicacyCategory from "../components/DelicacyCategory"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;

`

const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
`


const Option = styled.option``

const DelicacyList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Pasalubong for Everyone</Title>
        <FilterContainer>
             <Filter><FilterText style={{marginRight:"15px"}}>Sort products by:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (Asc)</Option>
                    <Option>Price (Desc)</Option>
                </Select>
             </Filter>
        </FilterContainer>
        <DelicacyCategory/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}


export default DelicacyList
import axios from 'axios'

//axios implementation
export default axios.create({
    baseURL: 'http://localhost:8000'
})
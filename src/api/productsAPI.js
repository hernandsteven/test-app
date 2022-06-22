import axios from "axios"
const productsUrl = 'https://fakestoreapi.com/products'

export const getProducts = async () => {
    try {
        const response = await axios.get(productsUrl)
        return response.data
    } catch (e) {
        console.error(e)
    }
}

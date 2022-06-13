import axios from "axios";

const todosUrl = 'https://jsonplaceholder.typicode.com/todos'

export const getTodos = async () => {
    try {
        let response = await axios.get(todosUrl)
        return response.data
    } catch (e) {
        console.error(e)
    }
}
import axios from "axios"

const api = axios.create({
    baseURL:"https://vueg1-api.herokuapp.com/",
})

export default api
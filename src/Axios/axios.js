// axios.js
import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskmaster-backend-6chj.onrender.com/api"
})
export default instance

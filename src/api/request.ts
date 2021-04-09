import axios from 'axios'

const service = axios.create({
    baseURL: "https://picsum.photos"
})

export default service
import axios from 'axios'

const instance = axios.create ({
    baseURL:"Localhost3001:/api/tinder/create"
})

export default instance;
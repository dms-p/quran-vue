import axios from 'axios'

const Api=axios.create({
    baseURL:'http://api.alquran.cloud/v1/'
})

export default Api
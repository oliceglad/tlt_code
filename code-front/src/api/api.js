import axios from "axios";


const instance = axios.create({
    baseURL: 'http://100.64.131.30:8080'
})

export const mainAPI = {
    postVideo(obj) {
        return instance.post('/file', obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
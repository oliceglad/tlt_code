import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080'
})

export const mainAPI = {
    postVideo(obj) {
        console.log(obj)
        return instance.post('/file', obj, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
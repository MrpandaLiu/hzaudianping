import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://192.168.3.19:8081',
        //baseURL: 'http://bffe96c9.ngrok.io',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    },(err) => {
        return Promise.reject(err)
    })
    instance.interceptors.response.use(res => {
        return res
    })

    return instance(config)
}
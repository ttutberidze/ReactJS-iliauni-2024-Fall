import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.interceptors.request.use((request) => {
//     console.log('Request Interceptor')
//     request.headers.Authorization = 'Hello 1234'
//     return request;
// }, (error) => {
//     return Promise.reject(error)
// })

// axios.interceptors.response.use((response) => {
//     return response.data
// }, (error) => {
//     return Promise.reject(error)
// })

export const privateApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

privateApi.interceptors.request.use((request) => {
    console.log('Request Interceptor')
    request.headers.Authorization = 'Hello 1234'
    return request;
}, (error) => {
    return Promise.reject(error)
})

privateApi.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})


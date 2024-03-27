import axios from "axios"

export const apiUrl = 'http://localhost:5000/api/'

let gg = ""

if (typeof window !== 'undefined') {

    if((JSON.parse(window?.localStorage?.getItem("persist:root")))){
        gg = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).info?.accessToken
    } else { gg = ""}
}


const TOKEN = gg

export const publicRequest = axios.create({
    baseURL: apiUrl
})

export const userRequest = axios.create({
    baseURL: apiUrl,
    headers: {token: `Bearer ${TOKEN}`}
})
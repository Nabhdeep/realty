import axios from "axios";

export const instaceAxios = axios.create({
    baseURL: import.meta.env.VITE_base_url
})
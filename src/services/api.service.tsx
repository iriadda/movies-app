import axios from "axios";
import {auth, baseUrl} from "../constants/Constants.tsx";


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer +${auth}`,
    },
});





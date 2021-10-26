import http from "./httpservice";

import {localhost} from "./config.json"

export const registerUser = user => {
    return http.post(
        `${localhost}/api/register`,
        JSON.stringify(user)
    )
}
export const loginUser = user =>{
    return http.post(
        `${localhost}/api/login`,
        JSON.stringify(user)
    )
}

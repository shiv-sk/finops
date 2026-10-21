/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const postAndPatchReq = async(url: string , method: "POST" | "PATCH" , data: object | FormData , isFormData=false)=>{
    try {
        const response = await axios({
            url,
            method,
            data,
            headers:{
                "Content-Type":isFormData ? "multipart/form-data" : "application/json",
            },
            withCredentials:true
        })
        // console.log("response from postAndPatchReq! " , response?.data);
        return response?.data;
    } catch (error: any) {
        console.log("error from getAndDeleteReq! " , error?.response);
        throw error;
    }
}

export {postAndPatchReq, baseUrl};
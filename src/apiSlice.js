import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setCredentials,logout } from './authSlice';
const baseQuery=fetchBaseQuery({
        baseUrl:'http://localhost:3500',
        credentials:'include',
        prepareHeaders:(headers,{getState}) =>{
            const token=getState().auth.token
            if(token){
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }
)

const baseQueryWithReauth=async(args,api,)
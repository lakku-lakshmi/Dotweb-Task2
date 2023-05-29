import { createSlice } from '@reduxjs/toolkit'
import {fetchUserData, login, signOut} from './authThunk';

const initialState = {
    token: null,
    user:null,
    // loading: false,
    // userData: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials:(state,action)=>{
            const {user,accessToken}=action.payload
            state.user=user
            state.token=accessToken
        },
        logout:(state,action)=>{
            state.user=null
            state.token=null
        }
    },
    })


export const {setCredentials,logout} = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUser=(state)=state.auth.user;
export const selectCurrentToken=(state)=state.auth.token;
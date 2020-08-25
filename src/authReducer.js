import React from "react";
import AuthAPI from './components/api';
const SET_USER_DATA='SET_USER_DATA';

let initialState={
    userId:null,
    email:null,
    isAuth:false
};

const authreducer=(state=initialState, action)=>
{
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return  state;
    }
}

export  const setAuthUserData=(userId, email, isAuth)=>({
    type:SET_USER_DATA, data:{userId, email, isAuth}});

export  const  getAuthUserData=()=>(dispatch)=>{
    AuthAPI.me()
        .then(response=> {
            if (response.data.resultCode === 0) {
                let {id, email} = response.data.data;
                dispatch(setAuthUserData((id, email, true)));
            }
        });
}

export  const  login=(email, password)=>(dispatch)=>{
    AuthAPI.login(email, password)
        .then(response=> {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export  const  logout=()=>(dispatch)=>{
    AuthAPI.logout()
        .then(response=> {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData((null, null, false)));
            }
        });
}
export  default authreducer;
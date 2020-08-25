import React from "react";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData} from "../authReducer";
import Home from "./Home";
import {getAuthUserData} from "../authReducer";

class  UserContainer extends React.Component{
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render(){
return <Home {...this.props}/>
    }
}

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    email: state.auth.email
});
export  default connect(mapStateToProps, {setAuthUserData}) (UserContainer);
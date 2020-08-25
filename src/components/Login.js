import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { reduxForm} from "redux-form";
import {connect} from "react-redux";
import  {login} from "../authReducer";
import  {Redirect, withRouter} from "react-router-dom";


function handleChange(event) {
    this.setState({value: event.target.value});
}

async function handleSubmit(event) {
    event.preventDefault();
    try {
        login();
        alert("Logged in");
        if (true) {
            return (
                <Redirect to="/user" />
            )
        }

    } catch (e) {
        alert(e.message);
    }
}


class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl placeholder={"Email"}
                               autoFocus
                               component={"input"}
                               name={"email"}

                               //onChange={handleChange}
                        />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl placeholder={"Password"}

                               component={"input"}
                               name={"password"}
                               type={"password"}
                              // onChange={handleChange}

                        />
                    </FormGroup>
                </div>
                <div>
                    <Button block bsSize="large" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        )
    }

}
    LoginForm = reduxForm({
        form: 'login'
    })(LoginForm)


const Login = (props) => {
        const onSubmit = (formData) => {
            props.login(formData.email, formData.password);
        }
        return (
            <div className="Login">
                <LoginForm onSubmit={onSubmit}/>
            </div>
        );
    }


 export default withRouter( connect(null, {login})) (Login);

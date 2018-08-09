import React from 'react';
import { Link } from "react-router-dom";
import api from '../api/index'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.userName = '';
        this.password = ''
    }

    render() {
        return (
            <div>
                <h1>this is login</h1>
                <form action="">
                    <label htmlFor="userName">
                        User name
                        <input id="userName" type="text" onChange={(e) => {this.onChange(e,'userName')}}/>
                    </label>
                    <label htmlFor="password">
                        password
                        <input id="password" type="text" onChange={(e) => {this.onChange(e,'password')}}/>
                    </label>
                    <button onClick={this.login}>Login</button>
                </form>
                <Link to="/log-up">
                    Logup
                </Link>
            </div>
        )
    }

    onChange = (e, type) => {
        e.preventDefault();
        switch(type){
            case "userName":
                this.userName = e.target.value;
                break;
            case "password":
                this.password = e.target.value;
                break;
            default:
                break
        }

    };

    login = (e) => {
        e.preventDefault();
        api.post('/api/login',{
            username: this.userName,
            password: this.password
        }).then(response => {
            console.log(response)
        })
    }
}

export default Login
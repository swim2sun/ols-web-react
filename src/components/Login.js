import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component{
    render() {
        return (
            <div>
                <h1>this is login</h1>
                <form action="">
                    <label htmlFor="userName">
                        User name
                        <input id="userName" type="text"/>
                    </label>
                    <label htmlFor="password">
                        password
                        <input id="password" type="text"/>
                    </label>
                    <button>Login</button>
                </form>
                <Link to="/log-up">
                    Logup
                </Link>
            </div>
        )
    }
}

export default Login
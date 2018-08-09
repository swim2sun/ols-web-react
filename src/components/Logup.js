import React from 'react';
import { Link } from "react-router-dom";

class Logup extends React.Component{
    render() {
        return (
            <div>
                <h1>this is logup</h1>
                <form action="">
                    <label htmlFor="userName">
                        User name
                        <input id="userName" type="text"/>
                    </label>
                    <label htmlFor="password">
                        password
                        <input id="password" type="text"/>
                    </label>
                    <label htmlFor="rePassword">
                        reenter password
                        <input id="rePassword" type="text"/>
                    </label>
                    <button>Logup</button>
                </form>
                <Link to="/">
                    Login
                </Link>
            </div>
        )
    }
}

export default Logup
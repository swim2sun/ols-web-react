import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Login from '../components/Login'
import Logup from '../components/Logup'

const Router = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login}/>
            <Route path="/log-up" component={Logup}/>
        </div>
    </BrowserRouter>
);

export default Router
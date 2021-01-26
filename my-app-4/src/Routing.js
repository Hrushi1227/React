import React from 'react';
import Home from './Home'
import { BrowserRouter, Route } from 'react-router-dom';


const Routing = () => {
    return (
        <BrowserRouter>


            <Route exact path="/" component={Home}></Route>


        </BrowserRouter>

    )
}

export default Routing;
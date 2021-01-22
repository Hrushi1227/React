import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Routing;

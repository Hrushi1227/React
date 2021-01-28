import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Listapi from './Component/Listing/listingApi';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/list/:id" component={Listapi} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;

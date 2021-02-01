import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Listapi from './Component/Listing/listingApi';
import HotelDetails from './Component/Details/HotelDetails'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/list/:id" component={Listapi} />
            <Route path="/details/:id" component={HotelDetails} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;

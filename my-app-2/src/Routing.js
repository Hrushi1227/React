import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Listapi from './Component/Listing/listingApi';
import HotelDetails from './Component/Details/HotelDetails';
import PlaceBooking from './Component/Booking/PlaceBooking';
import ViewBooking from './Component/Booking/bookingApi';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/list/:id" component={Listapi} />
            <Route path="/details/:id" component={HotelDetails} />
            <Route path="/booking/:hotel_name" component={PlaceBooking} />
            <Route path="/viewbooking/" component={ViewBooking} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;

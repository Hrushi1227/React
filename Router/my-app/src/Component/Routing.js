import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Footer from './Footer'
import Header from './Header'
import PostDetail from './PostDetail'


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route path="/post/:id" component={PostDetail} />
            <Route path="/profile" component={Profile} />
            <Footer />
        </BrowserRouter >
    )
}




export default Routing;
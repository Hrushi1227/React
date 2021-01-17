import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'

const App = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <h1>Hi From React </h1>
            <h2>React is the second Libray </h2>
            <Footer />

        </React.Fragment>)
}
ReactDOM.render(<App />, document.getElementById('root'));
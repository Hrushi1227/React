import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = (props) => {
    console.log("inside Header ", props);
    return (

        <header>

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Devloper Funner</Link>

                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">POST</Link></li>
                            <li><Link to="/profile">PROFILE</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>




    )

}

export default withRouter(Header);






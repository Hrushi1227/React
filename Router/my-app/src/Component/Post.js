import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    console.log("inside Post ", props);
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h2>
                    Post Page .....
                </h2>
            </div>
            <div className="panel-body">
                <p>

                    Hello Welcome to Post Page

                </p>
                <h2>JavaScript</h2>
                <Link to="/post/JavaScript?Page=1">Details</Link>
                <h2>NODE</h2>
                <Link to="/post/Node?Page=2">NODE</Link>
                <h3>REACT</h3>
                <Link to="/post/React?Page=3">REACT</Link>

            </div>
            <h1> POST</h1>
        </div >
    )
}

export default Post;
import React from 'react';

const PostDetail = (props) => {
    console.log((props.location.search).split('=')[1])
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h2>
                    PostDetail Page .....
                </h2>
            </div>
            <div className="panel-body">
                <p>

                    Hello Welcome to {props.match.params.id} Page



                </p>
                <h3>your On Page No = {(props.location.search).split('=')[1]}</h3>
            </div>
            <h1>POST</h1>
        </div>
    )
}

export default PostDetail;
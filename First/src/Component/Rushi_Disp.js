import React from 'react';

function My_lib(props) {
    console.log("Hello")

    const return_data = props.input_json1.map((new_read) => {
        return (
            <div key={new_read.id}>
                <h3>{new_read.address}</h3>
                <p>{new_read.lane}</p>

            </div>
        )
    })
    return (
        <div>
            {return_data}
        </div>)

}


export default My_lib;
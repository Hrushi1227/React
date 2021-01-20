import React from 'react';

function Input_Data(props) {
    const getter = props.inp.map((get_value) => {
        return (
            <div key={get_value.id}>
                <h2>{get_value.address}</h2>
                <h3>{get_value.lane}</h3>

            </div>
        )


    })
    return (
        <div>
            {getter}
        </div>
    )
}

export default Input_Data;
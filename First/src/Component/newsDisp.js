import React from 'react';

function NewsDisp(props) {
    console.log(props)

    const Get_data_fun = props.newsData.map((data1) => {
        return (
            <div key={data1.id}>
                <h3>{data1.title}</h3>
                <p>{data1.feed}</p>

            </div>
        )

    })
    return (
        <div>

            {Get_data_fun}
        </div>
    )
}

export default NewsDisp;

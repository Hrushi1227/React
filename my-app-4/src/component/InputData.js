import React, { Component } from 'react';



const lurl = "https://developerfunnel.herokuapp.com/location";

class InputData extends Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }

    }
    City = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option>{item.city_name}</option>
                )

            })
        }

    }
    render() {
        return (
            <div>
                <select>
                    <option>------------Select City-----------</option>
                    {this.City(this.state.location)}
                </select>

            </div>

        )
    }

    componentDidMount() {
        fetch(lurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {

                this.setState({ location: data });
            })

    }

}


export default InputData;
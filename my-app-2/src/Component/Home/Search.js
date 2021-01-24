import React, { Component } from 'react';
import './Search.css'

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
            hotels: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </ option>

                )



            })
        }
    }

    renderHotels = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </ option>

                )



            })
        }
    }

    handleCity = (event) => {
        // console.log(event.target.value)
        const cityID = event.target.value;
        fetch(`${hurl}${cityID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
                this.setState({ hotels: data })
            })

    }
    render() {
        return (
            <div className="imageContainer">
                <h1>Search</h1>
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With US
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----Select City-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option >----Select Restaurent-----</option>
                        {this.renderHotels(this.state.hotels)}
                    </select>

                </div>
            </div >
        )
    }

    componentDidMount() {
        fetch(lurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {

                this.setState({ location: data });
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export default Search;
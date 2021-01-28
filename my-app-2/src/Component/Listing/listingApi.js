import React, { Component } from 'react';
import axios from 'axios';
import ListingDisp from './listingDisp'

const url = "https://developerfunnel.herokuapp.com/hotellist";


class Listing extends Component {
    constructor() {
        super()

        this.state = {
            hotelslist: ''
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    Filter Here!

                </div>
                <div className="col-md-10">
                    <ListingDisp hotelslist={this.state.hotelslist} />

                </div>


            </div>
        )

    }

    componentDidMount() {

        var tripid = this.props.match.params.id;
        axios.get(`${url}/${tripid}`)
            .then((response) => { this.setState({ hotelslist: response.data }) })
    }

}

export default Listing;
import React, { Component } from 'react';
import axios from 'axios';
import ListingDisp from './listingDisp';
import RoomFilter from '../Filters/RoomFilter';
import CostFilter from '../Filters/CostFilter';



const url = "https://developerfunnel.herokuapp.com/hotellist";


class Listing extends Component {
    constructor() {
        super()

        this.state = {
            hotelslist: ''
        }
    }

    setDataAsPerFilter = (SortedData) => {
        this.setState({ hotelslist: SortedData })
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter RoomPerType={(data) => { this.setDataAsPerFilter(data) }} />
                    <CostFilter roomPerCost={(data) => { this.setDataAsPerFilter(data) }} />


                </div>
                <div className="col-md-10">
                    <ListingDisp hotelslist={this.state.hotelslist} />

                </div>


            </div>
        )

    }

    componentDidMount() {

        var tripid = this.props.match.params.id;
        sessionStorage.setItem('tripid', tripid)
        axios.get(`${url}/${tripid}`)
            .then((response) => { this.setState({ hotelslist: response.data }) })
    }

}

export default Listing;
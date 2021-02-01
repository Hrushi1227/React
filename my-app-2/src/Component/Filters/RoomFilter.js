import React, { Component } from 'react';
import axios from 'axios';

const lurl = "https://developerfunnel.herokuapp.com/hotellist"

//const lurl = "https://developerfunnel.herokuapp.com/hotellist/1?roomtype=1"

class RoomFilter extends Component {


    FilterRoom = (event) => {
        let roomId = event.target.value;
        console.log(event.target.value);
        let tripID = sessionStorage.getItem('tripid');
        let roomurl;

        if (roomId == '') {
            roomurl = `${lurl}/${tripID}`
        } else {
            roomurl = `${lurl}/${tripID}/?roomtype=${roomId}`
        }

        axios.get(roomurl)
            //.then((response) => { console.log(response.data) })
            .then((response) => { this.props.RoomPerType(response.data) })


    }

    render() {
        return (
            <React.Fragment>

                <center> Room Type .</center>
                <div onChange={this.FilterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room" />All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room" />Delux Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room" />Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room" />Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room" />Semi Delux Room
                    </label>
                </div>

            </React.Fragment>


        )

    }

}


export default RoomFilter;
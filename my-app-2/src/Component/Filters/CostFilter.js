import React, { Component } from 'react';
import axios from 'axios';



const lurl = "https://developerfunnel.herokuapp.com/hotellist";

// assignment -   https://developerfunnel.herokuapp.com/hotellist/1?hcost=1000&lcost=500



//const lurl = "https://developerfunnel.herokuapp.com/hotellist/1?roomtype=1"



class CostFilter extends Component {


    CostFilterValue = (event) => {
        //let roomId = event.target.value;
        // console.log(event.target.value);
        let Price_Room = event.target.value;
        let tripID = sessionStorage.getItem('tripid');

        let roomurl;

        let max = event.target.value;
        console.log(event.target.value)

        let min = event.target.min;
        //console.log(event.target.min)

        if (Price_Room == '') {
            roomurl = `${lurl}/${tripID}`
            //console.log(roomurl);
        } else {
            roomurl = `${lurl}/${tripID}?hcost=${max}&lcost=${min}`
            console.log(roomurl);
        }

        axios.get(roomurl)
            //.then((response) => { console.log(response.data) })
            .then((response) => { this.props.CostPerType(response.data) })


    }


    render() {
        return (
            <React.Fragment>

                <center> Cost Flter .</center>
                <div onChange={this.CostFilterValue} >



                    <input type="range" min="100" value="" max="10000" class="radio" id="myRange" ></input>

                    <label className="radio">
                        <input type="radio" value="" name="room" />All Prices
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room" />100-1000
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room" />1001-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room" />3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room" />6000-10000

                    </label>


                </div>

            </React.Fragment>


        )

    }

}


export default CostFilter;
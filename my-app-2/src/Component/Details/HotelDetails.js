import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class HotelDetails extends Component {

    constructor() {
        super()
        this.state = {
            details: '',
            tripid: sessionStorage.getItem('tripid')
        }
    }

    render() {
        let { details } = this.state
        return (



            < div className="container">
                < div className="panel panel-primary">
                    < div className="panel-heading">
                        <h3>{details.name}</h3>

                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{ height: 400, width: 1500 }} />

                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>

                        </div>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>About this Place</h2>
                                    <p>{details.name} is dolor sit amet, consectetur adipiscing elit. Cras mattis quis velit id elementum. Vestibulum lobortis elit magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis at mi a magna pharetra iaculis non sed lectus. Phasellus sapien lacus, sodales a tellus venenatis, vulputate bibendum odio. Curabitur a orci lorem. Vivamus aliquet quam id hendrerit dapibus. Quisque ut tortor erat. Nulla elit lacus, iaculis pretium enim a, maximus imperdiet ipsum. Phasellus mi sapien, bibendum et pellentesque in, sodales a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla a molestie mi. Nulla vel erat vitae purus lobortis mollis. Fusce ante nisl, rutrum nec elit eu, venenatis bibendum mi. Donec consequat, sapien hendrerit sodales luctus, tellus dui bibendum tellus, non dignissim turpis ex sit amet dolor. Duis commodo mi nisl, et dictum libero suscipit ac.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Us </h2>
                                    <h3>Phone No : 7757872754</h3>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <br />
                        <Link to={`/list/${this.state.tripid}`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Place Booking</Link>
                    </div>
                </div >

            </div >
        )

    }


    async componentDidMount() {
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`);
        this.setState({ details: response.data[0] })
    }



}

export default HotelDetails;
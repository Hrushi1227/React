import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON_FILE from './DB.json';
import NewsDisp from './newsDisp';
import Json_2 from './Js.json';
import My_lib from './Rushi_Disp';
import InputData from './InputData.json';
import Input_Data from './InputCode';



class Home extends Component {


    constructor() {
        super()
        this.state = {
            news_2: JSON_FILE,
            new_read: Json_2,
            input_data: InputData,
            filtered: JSON_FILE
        }
    }

    filterData = (keyword) => {
        const output = this.state.news_2.filter((data1) => {
            return data1.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({ filtered: output })

    }

    render() {

        return (

            <React.Fragment >
                <Header userText={(data1) => { this.filterData(data1) }} />
                <NewsDisp newsData={this.state.filtered} />
                <Input_Data inp={this.state.input_data} />
                <Footer year="03-03-2021" />
                <My_lib input_json1={this.state.new_read} />

            </React.Fragment >)
    }

}

export default Home;
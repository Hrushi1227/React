import React, { Component, Fragment } from 'react';
import './Header.css'


class Header extends Component {
    constructor() {
        super()

        this.state = {
            title: 'Devloper Funnel',
            keyword: 'User Text Here'
        }
    }

    Func_name_handle = (event_var) => {
        // console.log(event_var.target.value)
        this.setState({ keyword: event_var.target.value ? event_var.target.value : 'User Text Here' })
        this.props.userText(event_var.target.value)
    }

    render() {
        return (
            <Fragment >

                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input placeholder='Enter Input' onChange={this.Func_name_handle}></input>
                        <div id="user_inp">{this.state.keyword}</div>
                    </center>
                </header>
                <hr></hr>
            </Fragment >

        )
    }


}
export default Header;

// const Header = () => {
//     return (

//         <div>
//             <center>
//                 <h1>React APP</h1>
//                 <hr></hr>
//             </center>
//         </div>
//     )
// }


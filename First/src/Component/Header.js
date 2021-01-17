import React, { Component, Fragment } from 'react';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <Fragment >

                <header>
                    <div className="logo">Devloper Funnel</div>
                    <center>
                        <input placeholder='Enter Input'></input>
                        <div id="user_inp">User Text Here</div>
                        <hr></hr>
                    </center>
                </header>

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


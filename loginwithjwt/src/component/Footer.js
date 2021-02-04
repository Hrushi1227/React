import React from 'react';



const Footer = (props_ex) => {
    return (
        < React.Fragment >
            <center>
                <hr />
                <h2>&copy; Rushikesh Ghatol (Software Devloper {props_ex.year})</h2>
            </center>
        </ React.Fragment  >
    )

}

export default Footer;
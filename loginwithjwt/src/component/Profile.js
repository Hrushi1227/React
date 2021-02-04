import React, { Component } from 'react';

const url = "http://localhost:5000/api/auth/userinfo";


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: ''
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.props.history.push('/login')
    }

    render() {
        return (
            < div className="panel panel-success" >
                <div className="panel panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>HI {this.state.user.name}</h1>
                    <h1>You Email is {this.state.user.email}</h1>
                    <h1>You Email is {this.state.user.role}</h1>
                </div>
                <button className="btn btn-danger" onClick={this.handleLogout}>
                    LogOUt

            </button>
            </div >
        )
    }
    /*componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem(ltk)
            }
        })
            .then((res) => res.json())
            .then((date) => {
                this.setState({
                    user: data
                })
            })
    }*/
}
export default Profile;
import React from 'react';
import axios from 'axios';
import User from './User';
import LoaderImg from '../img/loader.gif';

// container 
// presentation
class UserList extends React.Component {

    state = { users: [], loading: true };

    constructor() {
        super();
        setTimeout(() => {
            axios.get('https://api.github.com/users')
                .then(res => {
                    const data = res.data;
                    this.setState({ loading: false, users: data });
                })
                .catch(err => {
                    this.setState({ loading: false });
                    console.log(err);
                });
        }, 1000);
    }

    render() {
        return <div>
            <h1>Users</h1>
            {
                this.state.loading &&
                <div className="loader">
                    <img src={LoaderImg} />
                    Loading...
                </div>
            }
            {this.state.users.map(user => <User key={user.login} user={user} />)}
        </div>
    }
}

export default UserList;

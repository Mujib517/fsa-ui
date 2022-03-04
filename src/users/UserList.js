import React from 'react';
import axios from 'axios';
import User from './User';
import ShouldRender from '../utils/ShouldRender';
import Loader from '../utils/Loader';
import Error from '../utils/Error';

// container 
// presentation
class UserList extends React.Component {

    state = { users: [], loading: true, error: false };

    constructor() {
        super();
        setTimeout(() => {
            axios.get('https://api.github.com/users')
                .then(res => {
                    const data = res.data;
                    this.setState({ loading: false, users: data, error: false });
                })
                .catch(err => {
                    this.setState({ loading: false, error: true });
                    console.log(err);
                });
        }, 1000);
    }

    render() {
        return <div>
            <h1>Users</h1>
            <ShouldRender cond={this.state.loading}>
                <Loader />
            </ShouldRender>
            <ShouldRender cond={this.state.error}>
                <Error />
            </ShouldRender>
            {this.state.users.map(user => <User key={user.login} user={user} />)}
        </div>
    }
}

export default UserList;

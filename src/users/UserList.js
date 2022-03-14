import React, { useEffect, useState } from 'react';
import User from './User';
import ShouldRender from '../utils/ShouldRender';
import Loader from '../utils/Loader';
import Error from '../utils/Error';
import axios from 'axios';

// container 
// presentation
const UserList = () => {

    // inital state
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // componentDidMount
    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res => {
                const data = res.data;
                setUsers(data);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err);
            });
    }, []);

    return <div>
        <h1>Users</h1>
        <ShouldRender cond={loading}>
            <Loader />
        </ShouldRender>
        <ShouldRender cond={error}>
            <Error />
        </ShouldRender>
        {users.map(user => <User key={user.login} user={user} />)}
    </div>
}

export default UserList;

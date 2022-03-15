import React, { useState } from 'react';
import ShouldRender from './utils/ShouldRender';
import userService from './services/userService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onTextChange = (e) => {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
    }

    const onLogin = async () => {
        try {
            const res = await userService.login(user);
            const userInfo = res.data;
            console.log(userInfo);
            userService.saveUser(userInfo);
            if (userInfo.role === 0)
                navigate('/users/update');
            else
                navigate('/users')
        } catch (e) {
            setError(true);
            console.log(e, 'error');
        }
    }

    return <div className="col-md-4 m-3">
        <ShouldRender cond={error}>
            <div className="alert alert-danger">
                Wrong username or password
            </div>
        </ShouldRender>
        <h1>Login</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input onChange={onTextChange} name="email" id="email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">Password</label>
            <input onChange={onTextChange} name="password" id="pwd" type="password" class="form-control" />
        </div>
        <div class="mb-3">
            <button onClick={onLogin} className="btn btn-primary">Login</button>
        </div>
    </div>
}

export default Login;

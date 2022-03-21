import React, { useContext, useState, useEffect } from 'react';
import ShouldRender from './utils/ShouldRender';
import userService from './services/userService';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const { setLogIn } = useContext(UserContext);

    useEffect(() => {
    }, []);

    const onTextChange = (e) => {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
    }

    const onLogin = async (evt) => {
        evt.preventDefault();
        try {
            const res = await userService.login(user);
            const userInfo = res.data;
            userService.saveUser(userInfo);
            setLogIn(true);
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
        <form onSubmit={onLogin}>
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input autoFocus onChange={onTextChange} name="email" id="email" type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password</label>
                <input onChange={onTextChange} name="password" id="pwd" type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
}

export default Login;

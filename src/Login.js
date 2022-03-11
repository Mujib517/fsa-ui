import React from 'react';
import ShouldRender from './utils/ShouldRender';
import userService from './services/userService';

class Login extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        error: false
    }

    onTextChange = (e) => {
        const newUser = { ...this.state.user, [e.target.name]: e.target.value };
        this.setState({ user: newUser });
    }

    onLogin = async () => {
        try {
            const res = await userService.login(this.state.user);
            userService.saveUser(res.data);
            window.location.assign('/users/update');
        } catch (e) {
            this.setState({ error: true });
            console.log(e, 'error');
        }
    }

    render() {
        return <div className="col-md-4 m-3">
            <ShouldRender cond={this.state.error}>
                <div className="alert alert-danger">
                    Wrong username or password
                </div>
            </ShouldRender>
            <h1>Login</h1>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input onChange={this.onTextChange} name="email" id="email" type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password</label>
                <input onChange={this.onTextChange} name="password" id="pwd" type="password" class="form-control" />
            </div>
            <div class="mb-3">
                <button onClick={this.onLogin} className="btn btn-primary">Login</button>
            </div>
        </div>
    }
}

export default Login;

import React from 'react';

class Login extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    render() {
        return <div className="col-md-4 m-3">
            <h1>Login</h1>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input name="email" id="email" type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password</label>
                <input name="password" id="pwd" type="password" class="form-control" />
            </div>
            <div class="mb-3">
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    }
}

export default Login;

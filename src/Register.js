import axios from 'axios';
import React from 'react';
import Error from './utils/Error';
import ShouldRender from './utils/ShouldRender';

class Register extends React.Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        success: false,
        error: false,
        userExists: false
    };

    onRegister = () => {
        axios.post('https://fsa-jobs-api.herokuapp.com/api/users/signup', this.state.user)
            .then(res => {
                this.setState({ firstName: '', lastName: '', email: '', password: '', success: true, error: false, userExists: false })
            })
            .catch(err => {
                if (err.message.indexOf('409') > -1) this.setState({ userExists: true, success: false });
                else this.setState({ error: true, success: false });
            });
    }

    onTextChange = (evt) => {
        const newUser = { ...this.state.user, [evt.target.name]: evt.target.value };
        this.setState({ user: newUser });
    }

    render() {
        return <div class="m-3 col-md-4">
            <ShouldRender cond={this.state.success}>
                <div class="mb-3 alert alert-success">
                    Successfully Registered.
                </div>
            </ShouldRender>
            <ShouldRender cond={this.state.userExists}>
                <div class="mb-3 alert alert-danger">
                    User already exists.
                </div>
            </ShouldRender>
            <ShouldRender cond={this.state.error}>
                <Error />
            </ShouldRender>
            <div class="mb-3">
                <h3>Register</h3>
                <hr />
            </div>
            <div class="mb-3">
                <label for="fName" class="form-label">Firstname</label>
                <input name="firstName" value={this.state.firstName} onChange={this.onTextChange} id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="lName" class="form-label">Lastname</label>
                <input name="lastName" value={this.state.lastName} onChange={this.onTextChange} id="lName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input name="email" value={this.state.email} onChange={this.onTextChange} id="email" type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password</label>
                <input name="password" value={this.state.password} onChange={this.onTextChange} id="pwd" type="password" class="form-control" />
            </div>
            <div class="mb-3">
                <button onClick={this.onRegister} className='btn btn-danger'>Register</button>
            </div>
        </div>
    }
}

export default Register;

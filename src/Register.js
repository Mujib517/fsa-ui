import axios from 'axios';
import React from 'react';

class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    onRegister = () => {
        axios.post('https://fsa-api.herokuapp.com/api/users/signup', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    onFirstNameChange = (evt) => {
        this.setState({ firstName: evt.target.value });
    }

    onLastnameChange = (evt) => {
        this.setState({ lastName: evt.target.value });
    }

    onEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    onPwdChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    render() {
        return <div class="m-3 col-md-4">
            <div class="mb-3">
                <h3>Register</h3>
                <hr />
            </div>
            <div class="mb-3">
                <label for="fName" class="form-label">Firstname</label>
                <input onChange={this.onFirstNameChange} id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="lName" class="form-label">Lastname</label>
                <input onChange={this.onLastnameChange} id="lName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input onChange={this.onEmailChange} id="email" type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password</label>
                <input onChange={this.onPwdChange} id="pwd" type="password" class="form-control" />
            </div>
            <div class="mb-3">
                <button onClick={this.onRegister} className='btn btn-danger'>Register</button>
            </div>
        </div>
    }
}

export default Register;

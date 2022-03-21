import React, { Component } from 'react';
import userService from './services/userService';
import Chips from './utils/Chips';
import ShouldRender from './utils/ShouldRender';
import Error from './utils/Error';

class UpdateUser extends Component {

    constructor() {
        super();

        console.log('constructor...');
    }

    componentDidMount = () => {
        console.log('componentDidMount...');
        const user = userService.getUserFromStorage();
        userService.getUser(user.email)
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(e => {
                console.log(e);
                this.setState({ error: true });
            });
    }

    state = {
        user: {
            email: '',
            firstName: '',
            lastName: '',
            qualification: '',
            degree: '',
            skills: []
        }
    };

    onValueChange = (e) => {
        const user = { ...this.state.user, [e.target.name]: e.target.value }
        this.setState({ user });
    }

    onUpdate = async () => {
        try {
            const fd = FormData();
            for (let key in this.state.user) {
                fd.append(key, this.state.user[key]);
            }

            await userService.update(fd);
            this.setState({ error: false, success: true });

            setTimeout(() => {
                this.setState({ success: false });
            }, 3000);
            console.log('successfully updated');
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    onSkillsChange = (skills) => {
        const user = { ...this.state.user, skills };
        this.setState({ user });
    }

    onFileChange = (evt) => {
        const user = { ...this.state.user, resume: evt.target.files[0] }
        this.setState({ user });
    }

    render() {
        const { firstName, lastName, qualification, degree, skills } = this.state.user;
        return <div className="col-md-4 m-3">
            <ShouldRender cond={this.state.error}>
                <Error />
            </ShouldRender>
            <ShouldRender cond={this.state.success}>
                <div className="alert alert-success">Successfully Updated</div>
            </ShouldRender>
            <div className="mb-3">
                <h3>Update Profile</h3>
                <hr />
            </div>
            <div className="mb-3">
                <label htmlFor="fName" className="form-label">Firstname</label>
                <input value={firstName} onChange={this.onValueChange} name="firstName" id="fName" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="lName" className="form-label">Firstname</label>
                <input value={lastName} onChange={this.onValueChange} name="lastName" id="fName" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="qualification" className="form-label">Qualification</label>
                <select value={qualification} onChange={this.onValueChange} name="qualification" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">10+2</option>
                    <option value="1">UG</option>
                    <option value="2">PG</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="degree" className="form-label">Degree</label>
                <select value={degree} onChange={this.onValueChange} name="degree" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">BE/BTech</option>
                    <option value="1">BCom</option>
                    <option value="2">BCA</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Skills</label>
                <Chips skills={skills} onSkillsChange={this.onSkillsChange} />
            </div>
            <div className="mb-3">
                <input type="file" onChange={this.onFileChange} className="form-control" />
            </div>

            <div className="mb-3">
                <button onClick={this.onUpdate} className="btn btn-danger btn-sm">Update</button>
            </div>
        </div>
    }

    componentWillUnmount() {
        console.log('unmounted');
        // clean up
    }
}

export default UpdateUser;

// constructor      x1
// componentDidMount x1
// componentDidUpdate  xN
// componentShouldUpdate xN
// componentWillUnmount x1
// getDerivedStateFromProps xN
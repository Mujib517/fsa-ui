import React, { Component } from 'react';
import Chips from './utils/Chips';

class UpdateUser extends Component {
    state = {
        user: {
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

    onUpdate = () => {
        console.log(this.state);
    }

    onSkillsChange = (skills) => {
        const user = { ...this.state.user, skills };
        this.setState({ user });
    }

    render() {
        return <div className="col-md-4 m-3">
            <div class="mb-3">
                <h3>Update Profile</h3>
                <hr />
            </div>
            <div class="mb-3">
                <label for="fName" className="form-label">Firstname</label>
                <input onChange={this.onValueChange} name="firstName" id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="lName" className="form-label">Firstname</label>
                <input onChange={this.onValueChange} name="lastName" id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="qualification" className="form-label">Qualification</label>
                <select onChange={this.onValueChange} name="qualification" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">10+2</option>
                    <option value="1">UG</option>
                    <option value="2">PG</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="degree" className="form-label">Degree</label>
                <select onChange={this.onValueChange} name="degree" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">BE/BTech</option>
                    <option value="1">BCom</option>
                    <option value="2">BCA</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div class="mb-3">
                <label className="form-label">Skills</label>
                <Chips onSkillsChange={this.onSkillsChange} />
            </div>
            <div class="mb-3">
                <button onClick={this.onUpdate} className="btn btn-danger btn-sm">Update</button>
            </div>
        </div>
    }
}

export default UpdateUser;

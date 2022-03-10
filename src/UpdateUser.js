import React, { Component } from 'react';
import Chips from './utils/Chips';

class UpdateUser extends Component {
    state = {}
    render() {
        return <div className="col-md-4 m-3">
            <div class="mb-3">
                <h3>Update Profile</h3>
                <hr />
            </div>
            <div class="mb-3">
                <label for="fName" className="form-label">Firstname</label>
                <input name="firstName" id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="lName" className="form-label">Firstname</label>
                <input name="lastName" id="fName" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="qualification" className="form-label">Qualification</label>
                <select name="qualification" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">10+2</option>
                    <option value="1">UG</option>
                    <option value="2">PG</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="degree" className="form-label">Degree</label>
                <select name="degree" className="form-control">
                    <option value="">--Select--</option>
                    <option value="0">BE/BTech</option>
                    <option value="1">BCom</option>
                    <option value="2">BCA</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div class="mb-3">
                <Chips />
            </div>
            <div class="mb-3">
                <button className="btn btn-danger btn-sm">Update</button>
            </div>
        </div>
    }
}

export default UpdateUser;

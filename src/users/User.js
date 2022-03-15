import UserIcon from '../img/user-icon.jpeg';

const User = ({ user }) => {
    return <div className="m-3 col-md-3">
        <div className="card">
            <img width="150" height="220" className="card-img-top" src={UserIcon}></img>
            <div className="card-header">{user.firstName} {user.lastName}</div>
            <div className="card-body">
                <div>{user.email}</div>
                <div>{user.degree}</div>
                <div>{user.qualification}</div>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger">
                    <i className="fa fa-heart"></i>
                    &nbsp;
                    Shortlist
                </button>
            </div>
        </div>
    </div>
}

export default User;

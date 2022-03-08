import { Link } from 'react-router-dom';

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">FSA Jobs</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <div>
                <Link to="/register" class="btn btn-sm btn-danger">Register</Link>=
            </div>
            <div>
                <Link to="/login" class="btn btn-sm btn-danger">Login</Link>
            </div>
        </div>
    </nav>
}

export default Header;

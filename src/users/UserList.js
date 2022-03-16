import { useEffect, useState } from "react";
import userService from "../services/userService";
import ShouldRender from "../utils/ShouldRender";
import Error from '../utils/Error';
import User from "./User";
import { useNavigate } from "react-router-dom";

const UserList = () => {

    const [error, setError] = useState(false);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [userData, setUserData] = useState({ data: [], metadata: {} });
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const res = await userService.getUsers(page, size);
            setUserData(res.data);
        } catch (e) {
            if (e.message.indexOf('401') > -1) navigate('/login');
            else setError(true);
        }
    }, [page, size]);

    const prev = () => {
        setPage(page - 1);
    }

    const next = () => {
        setPage(page + 1);
    }

    const onPageSizeChange = (evt) => {
        setPage(0);
        setSize(evt.target.value);
    }

    const Pagination = () => <div className="row m-3">
        <div className="col-md-1">
            Page Size
            <select value={size} onChange={onPageSizeChange} className="form-control">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="100">100</option>
            </select>
        </div>
        <div className="col-md-1">
            <button className="btn btn-lg" disabled={page === 0} onClick={prev}>
                <i className="fa fa-arrow-left"></i>
            </button>
        </div>
        <div class="col-md-2">
            <span>Page {page + 1} of {userData.metadata.totalPages}</span>
        </div>
        <div className="col-md-1">
            <button disabled={page === (userData.metadata.totalPages - 1)} className="btn btn-lg" onClick={next}>
                <i className="fa fa-arrow-right"></i>
            </button>
        </div>
    </div>

    return <div>
        <h1>Users</h1>
        <ShouldRender cond={error}>
            <Error />
        </ShouldRender>
        <Pagination />
        {userData.data.map(user => <User user={user} />)}
        <Pagination />
    </div>

}

export default UserList;

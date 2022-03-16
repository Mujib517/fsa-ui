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
    const [search, setSearch] = useState('');
    const [degree, setDegree] = useState('');
    const [sort, setSort] = useState('');
    const [sortDir, setSortDir] = useState(1);
    const [userData, setUserData] = useState({ data: [], metadata: {} });
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const res = await userService.getUsers(page, size, search, degree, sort, sortDir);
            setUserData(res.data);
        } catch (e) {
            if (e.message.indexOf('401') > -1) navigate('/login');
            else setError(true);
        }
    }, [page, size, search, degree, sort]);

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

    const onKeyPress = (evt) => {
        if (evt.charCode === 13) {
            setSearch(evt.target.value);
        }
    }

    const onDegreeChange = (evt) => {
        setDegree(evt.target.value);
    }

    const onSortChange = (evt) => {
        const val = evt.target.value;
        const tokens = val.split(' ');
        setSort(tokens[0]);
        setSortDir(tokens[1]);
        // setSort(evt.target.value);
    }

    return <div>
        <h1>Users</h1>
        <ShouldRender cond={error}>
            <Error />
        </ShouldRender>
        <div className="row m-3">
            <div className="col-md-3">
                {/* <i className="fa fa-search"></i> */}
                <input onKeyPress={onKeyPress} placeholder="Enter Name" type="text" className="form-control">
                </input>
            </div>
            <div className="col-md-2">
                <select value={degree} onChange={onDegreeChange} className="form-control">
                    <option value="">Degree</option>
                    <option value="0">BE/BTech</option>
                    <option value="1">BCom</option>
                    <option value="2">BSc</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div className="col-md-2">

                <select value={`${sort} ${sortDir}`} onChange={onSortChange} className="form-control">
                    <option value="">Sort</option>
                    <option value="updatedAt 1">updatedAt</option>
                    <option value="updatedAt -1">updatedAt DESC</option>
                    <option value="firstName 1">firstName</option>
                    <option value="firstName -1">firstName DESC</option>
                    <option value="lastName 1">lastName</option>
                    <option value="lastName -1">lastName DESC</option>
                </select>
            </div>
        </div>
        <Pagination />
        {userData.data.map(user => <User user={user} />)}
        <Pagination />
    </div >

}

export default UserList;

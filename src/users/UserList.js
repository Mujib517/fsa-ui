import { useEffect, useState } from "react";
import userService from "../services/userService";
import ShouldRender from "../utils/ShouldRender";
import Error from '../utils/Error';
import User from "./User";

const UserList = () => {

    const [error, setError] = useState(false);
    const [userData, setUserData] = useState({ data: [], metadata: {} });

    useEffect(async () => {
        try {
            const res = await userService.getUsers();
            setUserData(res.data);
        } catch (e) {
            setError(true);
        }
    }, []);

    return <div>
        <h1>Users</h1>
        <ShouldRender cond={error}>
            <Error />
        </ShouldRender>
        {userData.data.map(user => <User user={user} />)}
    </div>

}

export default UserList;

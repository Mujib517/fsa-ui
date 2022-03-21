import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "./services/userService";
import User from "./users/User";

const UserDetail = (props) => {

    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(async () => {
        const res = await userService.getUserByEmail(params.email);
        setUser(res.data);
    }, []);

    return <div>
        <User user={user} />
    </div>
}

export default UserDetail;

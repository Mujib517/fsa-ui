import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "./services/userService";
import User from "./users/User";
import ShouldRender from "./utils/ShouldRender";
import PDFViewer from './utils/PDFViewer';

const UserDetail = (props) => {

    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(async () => {
        const res = await userService.getUserByEmail(params.email);
        setUser(res.data);
    }, []);

    return <div>
        <User user={user} />
        <ShouldRender cond={user.resume}>
            <PDFViewer filename={`https://fsa-jobs-api.herokuapp.com/uploads/${user.resume}`} />
        </ShouldRender>
    </div>
}

export default UserDetail;

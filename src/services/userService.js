import axios from './httpService';

// environments
// dev  dev.facebook.com/api/users
// qa   qa.facebook.com/api/users
// stage stage.facebook.com/api/users
// production facebook.com

const login = (user) => {
    return axios.post('/api/users/signin',
        user);
}

const register = (user) => {
    return axios.post('/api/users/signup',
        user);
}

const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const update = (user) => {
    const userFromLocalStorage = localStorage.getItem('user');
    const json = JSON.parse(userFromLocalStorage) || {};
    const token = json.token;
    const headers = {
        authorization: `Bearer ${token}`
    };
    return axios.put(`/api/users/${user.email}`, user, { headers });
};

const getUser = (email) => {
    const userFromLocalStorage = localStorage.getItem('user');
    const json = JSON.parse(userFromLocalStorage) || {};
    const token = json.token;
    const headers = {
        authorization: `Bearer ${token}`
    };
    return axios.get(`/api/users/${email}`, { headers });
};

const getUserFromStorage = () => {
    const data = localStorage.getItem('user');
    return JSON.parse(data);
}

export default { login, saveUser, register, update, getUser, getUserFromStorage };
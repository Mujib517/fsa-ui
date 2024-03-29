import axios from './httpService';

// environments

const getHeaders = () => {
    const userFromLocalStorage = localStorage.getItem('user');
    const json = JSON.parse(userFromLocalStorage) || {};
    const token = json.token;
    const headers = {
        authorization: `Bearer ${token}`
    };
    return headers;
};
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
    return axios.put(`/api/users/${user.get('email')}`, user, { headers: getHeaders() });
};

const getUser = (email) => {
    return axios.get(`/api/users/${email}`, { headers: getHeaders() });
};

const getUserFromStorage = () => {
    const data = localStorage.getItem('user');
    return JSON.parse(data);
}

const getUsers = (page, size, search, degree, sort, sortDir) => {
    let url = `/api/users/page/${page}/size/${size}?name=${search}`;
    if (degree !== '')
        url = `${url}&degree=${degree}`
    if (sort !== '')
        url = `${url}&sort=${sort}&sortDir=${sortDir}`
    return axios.get(url, {
        headers: getHeaders()
    });
}

const logout = () => {
    localStorage.removeItem('user');
}

const isLoggedIn = () => {
    return !!localStorage.getItem('user');
}

const getUserByEmail = (email) => {
    return axios.get(`/api/users/${email}`, { headers: getHeaders() });
}

export default {
    login, saveUser, register,
    update, getUser, getUserFromStorage,
    getUsers,
    logout,
    isLoggedIn,
    getUserByEmail
};
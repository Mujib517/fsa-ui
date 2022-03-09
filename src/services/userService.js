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


export default { login, saveUser, register };
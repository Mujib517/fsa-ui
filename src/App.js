import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserContext from './context/UserContext';
import userService from './services/userService';

function App() {
    const [isLoggedIn, setLogIn] = useState(userService.isLoggedIn);

    return <UserContext.Provider value={{ isLoggedIn, setLogIn }}>
        <AppRoutes />
    </UserContext.Provider>
}

export default App;


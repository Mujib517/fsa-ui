import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import UserList from './users/UserList';
import './App.css';

function App() {
    return <div>
        <Header />
        <UserList />
        <Footer />
    </div>
}

export default App;


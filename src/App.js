import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
    return <div>
        <Header />
        <AppRoutes />
        <Footer />
    </div>
}

export default App;


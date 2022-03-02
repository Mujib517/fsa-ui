import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.css';

// Es6 modules
// commonjs module
// JSX
function App() {
    // const h1 = React.createElement('h1', {}, 'Hello React');
    // const img = React.createElement('img', { width: 100, height: 100, src: 'https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg' });
    // const div = React.createElement('div', {}, [h1, img]);
    // return div;

    return <div>
        <Header />
        <ProductList />
        <Footer />
    </div>
}

export default App;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Name from './Name';
import Counter from './utils/Counter';

// Es6 modules
// commonjs module
// JSX
function App() {
    // const h1 = React.createElement('h1', {}, 'Hello React');
    // const img = React.createElement('img', { width: 100, height: 100, src: 'https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg' });
    // const div = React.createElement('div', {}, [h1, img]);
    // return div;

    return <div>
        <Counter count={10} />
        <Counter count={0} />
        <Header />
        <h1>Hello React</h1>
        {/* property */}
        <Name personName="John" age="20" />
        <Name personName="Joseph" age="21" />
        <img width="200" height="200" src="https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg" />
        <Footer />
    </div>
}

export default App;


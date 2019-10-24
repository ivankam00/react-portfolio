import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Introduction from './introduction';
import Footer from './footer';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div idName="content" className="site-content">
                <main idName="main" className="site-main">
                    <aside idName="sidebar">
                        <Sidebar></Sidebar>
                    </aside>
                    <Introduction></Introduction>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

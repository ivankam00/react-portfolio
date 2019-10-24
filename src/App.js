import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Introduction from './introduction';
import About from './about';
import Projects from './projects';
import Graphics from './graphics';
import Contact from './contact';
import Footer from './footer';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div id="content" className="site-content">
                <main id="main" className="site-main">
                    <aside id="sidebar">
                        <Sidebar></Sidebar>
                    </aside>
                    <div>
                        <Introduction></Introduction>
                        <About></About>
                        <Projects></Projects>
                        <Graphics></Graphics>
                        <Contact></Contact>
                    </div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

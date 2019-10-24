import React from 'react';
import './App.css';
import './styles/reset.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Graphics from './components/graphics';
import Contact from './components/contact';
import Footer from './components/footer';

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

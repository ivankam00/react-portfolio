import React from 'react';

// Styles
import './App.css';
import './styles/reset.css';
import './styles/grid.css';
import './styles/style.css';
import './styles/responsive.css';

// Page Sections
import Header from './components/page-sections/header';
import Sidebar from './components/page-sections/sidebar';
import Introduction from './components/page-sections/introduction';
import About from './components/page-sections/about';
import Projects from './components/page-sections/projects';
import Graphics from './components/page-sections/graphics';
import Contact from './components/page-sections/contact';
import Footer from './components/page-sections/footer';

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

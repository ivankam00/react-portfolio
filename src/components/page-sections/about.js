import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor(props) { super(props) }

    render() {
        const aboutImage = ("./images/flag.jpg")

        return (
            <section>
                <h2>ABOUT MYSELF</h2>
                <div><img src={aboutImage} className="about-image" alt="Picture of Ivan" /></div>
                <div>
                    <p>Currently being unemployed and looking for a job, I am developing my back-end coding skills, while at the same time,
                        improving on my knowledge of ReactJS and Unity. In my free time, I enjoy hiking, playing JRPG video games, and
                        watching anime.</p>
                    <p>My passion for programing stems from my curiosity to break things apart to understand how they work. That curiosity is
                        now my driving force to further improve my skills by challenging myself with new technologies. Currently, I am
                        developing my back-end coding skills to balance my knowledge in front-end development. At the same time, I am
                        improving on my knowledge of ReactJS and Unity.</p>
                    <p>In my free time, I enjoy hiking, playing JRPG video games, and watching anime or Asian dramas.</p> 
                    <p>My background is in Computer Information Systems with a minor in Business. Although the degree is not code heavy
                        as computer science, through the business courses, I learned the skills needs to work in groups and teams of people
                        with varying backgrounds, to prepare me for an office environment. Most of the courses I took to obtain my Business
                        minor are either accounting or finance courses. Currently, I have no ambitions in pursuing a degree in either
                        accounting or finance.</p>                        
                </div>
            </section>
        )
    }
}
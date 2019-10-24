import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor(props) { super(props) }

    render() {
        const aboutImage = ("./images/img_13931.jpg")

        return (
            <section>
                <h3>ABOUT MYSELF</h3>
                <div><img src={aboutImage} className="about-image" alt="Picture of Ivan" /></div>
                <div></div>
            </section>
        )
    }
}
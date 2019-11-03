import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) { super(props) }

    render() {
        const banner = ("./images/pond.jpg") // Image below h1 tag

        return (
            <header>
                <h1>Ivan's Web Development Portfolio</h1>
                <img src={banner} className="header-banner" alt="Banner" />
            </header>
        )
    }
}
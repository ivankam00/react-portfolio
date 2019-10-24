import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) { super(props) }

    render() {
        const element = (<div>Text from Element</div>)

        return (
            <div className="comptext">
                <h1>Hello World!</h1>
                {this.props.displaytext}
                {element}
            </div>
        )
    }
}
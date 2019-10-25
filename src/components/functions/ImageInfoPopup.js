import React, { Component } from 'react';

export default class ImageInfoPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePopup.bind(this)} style={{width:'250px'}}>{this.props.image}</button>

                {this.state.showPopup ?
                    <div className='popup'>
                        <div className='popup\_inner'>
                            <div className="col12-m-6">
                                <section>
                                    {this.props.image}
                                </section>
                            </div>
                            <div className="col12-m-6">
                                <section>
                                    <h1>{this.props.title}</h1>
                                    <p><b>{this.props.subtitle}</b></p>
                                    {this.props.description}
                                    <button onClick={this.togglePopup.bind(this)}>CLOSE</button>
                                </section>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}
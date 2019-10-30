import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


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
        const containerStyle = {
            display: 'inline-flex',
            verticalAlign: 'middle',
            padding: '5px'
        }

        const buttonStyle = {
            width: '250px',
            height: '200px',
            padding: '5px'
        }

        return (
            <div style={containerStyle}>
                <button onClick={this.togglePopup.bind(this)} style={buttonStyle}>{this.props.image}</button>

                {this.state.showPopup ?
                    <div className='popup'>
                        <div className='lightbox'>
							<Scrollbars>
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
							 </Scrollbars>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}
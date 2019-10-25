import React from 'react';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <section>
                        {this.props.image}
                    </section>
					<section>
                        <h1>{this.props.title}</h1>
                        <h3>{this.props.subtitle}</h3>
                        {this.props.description}
                        <button onClick={this.props.closePopup}>CLOSE</button>
					</section>
                </div>
            </div>
        );
    }
}

export default Popup;
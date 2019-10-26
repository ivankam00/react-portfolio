import React, { Component } from 'react';
import ImageInfo from '../../components/functions/ImageInfoPopup'; 

export default class Sidebar extends Component {
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
            <section>
                <h2>Website Projects</h2>
                <div className="row">
                    <ImageInfo
                        image={<img src="./images/fcqns.jpg" alt="FCQNS.Tech Inc." />}
                        title="FCQNS.Tech Website"
                        subtitle={<span>Built in November 2017 for URL <a href="https://fcqns.tech" target="_blank">https://fcqns.tech</a></span>}
                        description={<p>When I was working at FCQNS.Tech Inc., I was placed in charge of coding the front-end layout of the
                            company's website. There was no wirefreame design for layout, I just built it based on what my boss imagined, having
                            him show me examples of sections on other websites.<br/> Later on, I would also be adding addition pages and
                            back-end applications in the admin dashboard.</p>}
                    />
                    <ImageInfo
                        image={<img src="./images/lumenz.jpg" alt="Lumenz" />}
                        title="Lumenz Website"
                        subtitle={<span>Built in June 2018 for URL <a href="https://lumenz.ca" target="_blank">https://lumenz.ca</a></span>}
                        description={<p>I was tasked to make an exact duplicate of the client's existing website and rebuild it so that there
                            are no security or functionality issues when porting them into the Solar Store Network service offered by
                            FCQNS.Tech Inc.</p>}
                    />
                    <ImageInfo
                        image={<img src="./images/contractors_contact.jpg" alt="ContractorsContact" />}
                        title="ContractorContacts Website"
                        subtitle={<span>Built in August 2018 for URL <a href="https://contractorscontact.com" target="_blank">https://contractorscontact.com</a></span>}
                        description={<p>Tasked with building a platform to contract out solar panel installation that cannot be handle by
                            the solar retail company, where the products were purchased. I utilized 3rd party applications, along with some
                            custom back-end coding, to develop an online platform where solar store retailers on the FCQNS.Tech Solar Store
                            Network could post installation jobs for licensed solar installation contractors.</p>}
                    />
                </div>
            </section> 
        )
    }
}
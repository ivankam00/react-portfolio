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
                    <ImageInfo
                        image={<img src="./images/quest_theatre.png" alt="Quest Theatre" />}
                        title="Quest Theatre Website"
                        subtitle={<span>Built in January 2017 for URL <a href="https://www.questtheatre.org/" target="_blank">https://www.questtheatre.org/</a></span>}
                        description={<p>With the client wanting to switch from WordPress to SquareSpace, to make it easier for them to
                            update content without needing to know website coding, I was scouted by my graphic designer friend to help her
                            build the website. I was provided all the graphics and content needed to be transferred; as well as, the starting
                            template to build the website. Since this was the first time I built as website using SquareSpace, I found that
                            it was more difficult to imploy your own custom features than in WordPress. After completing the website, and
                            helping the client to redirect the DNS and URL to the new website IP, I taught them how to navigate and update
                            the content of their website. As an extra, free of charge service, I provide them with a documentation manual
                            of how to update and maintain their website. They were very happy with my work and the service that I provided
                            them.</p>}
                    />
                </div>
            </section> 
        )
    }
}
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
                        URL="./images/fcqns.jpg"
                        title="FCQNS.Tech Website"
                        subtitle={<span>Built in November 2017 for URL <a href="https://fcqns.tech" target="_blank">https://fcqns.tech</a></span>}
                        description={<p>When I was working at FCQNS.Tech Inc., I was placed in charge of coding the front-end layout of the
                            company's website. There was no wirefreame design for layout, I just built it based on what my boss imagined, having
                            him show me examples of sections on other websites.<br/> Later on, I would also be adding addition pages and back-end
                            applications in the admin dashboard.</p>}
                    />
                    <ImageInfo
                        URL="./images/anagram_solar.png"
                        title="Anagram Solar Website"
                        subtitle={<span>Built in May 2018 for URL <a href="https://anagramsolar.com/" target="_blank">https://anagramsolar.com/</a></span>}
                        description={<p>Tasked with adding the client's website into FCQNS.Tech's Solar Store Network platform, while ensure no
                            security or functionality issues occur, I made an exact duplication of their website. This method made it easier to
                            not only get them on the platform quicker, but also ensured that knew that the applications and features running on
                            their website did not pose any security risks on our hosting server. I put a lot of hours on the landing page to
                            ensure that all the graphics and animation worked exactly like their current website.</p>}
                    />
                    <ImageInfo
                        URL="./images/lumenz.jpg"
                        title="Lumenz Website"
                        subtitle={<span>Built in June 2018 for URL <a href="https://lumenz.ca" target="_blank">https://lumenz.ca</a></span>}
                        description={<p>Tasked with adding the client's website into FCQNS.Tech's Solar Store Network platform, while ensure no
                            security or functionality issues occur, I made an exact duplication of their website. This method made it easier to
                            not only get them on the platform quicker, but also ensured that knew that the applications and features running on
                            their website did not pose any security risks on our hosting server.</p>}
                    />
                    <ImageInfo
                        URL="./images/contractors_contact.jpg"
                        title="ContractorContacts Website"
                        subtitle={<span>Built in August 2018 for URL <a href="https://contractorscontact.com" target="_blank">https://contractorscontact.com</a></span>}
                        description={<p>Tasked with building a platform to contract out solar panel installation that cannot be handle by the 
                            solar retail company, where the products were purchased. I utilized 3rd party applications, along with some custom
                            back-end coding, to develop an online platform where solar store retailers on the FCQNS.Tech Solar Store Network could
                            post installation jobs for licensed solar installation contractors.</p>}
                    />
                    <ImageInfo
                        URL="./images/quest_theatre.png"
                        title="Quest Theatre Website"
                        subtitle={<span>Built in January 2017 for URL <a href="https://www.questtheatre.org/" target="_blank">https://www.questtheatre.org/</a></span>}
                        description={<p>With the client wanting to switch from WordPress to SquareSpace, to make it easier for them to update
                            content without needing to know website coding, I was scouted by my graphic designer friend to help her build the
                            website. I was provided all the graphics and content needed to be transferred; as well as, the starting template to
                            build the website. Since this was the first time I built as website using SquareSpace, I found that it was more
                            difficult to imploy your own custom features than in WordPress. After completing the website, and helping the client
                            to redirect the DNS and URL to the new website IP, I taught them how to navigate and update the content of their
                            website. As an extra, free of charge service, I provide them with a documentation manual of how to update and maintain
                            their website. They were very happy with my work and the service that I provided them.</p>}
                    />
                    <ImageInfo
                        URL="./images/fresh_start_capital.png"
                        title="Fresh Start Capital Website"
                        subtitle={<span>Built in April 2018 for URL <a href="https://freshstartcapital.ca" target="_blank">https://freshstartcapital.ca</a></span>}
                        description={<p>Tasked to build a platform where our company could connect people with more financing options, regardless
                            of their credit score or financial situation. This website employs many forms requesting simple information depending
                            on what the client is seeking to finance.</p>}
                    />
                    <ImageInfo
                        URL="./images/your_solar_store.png"
                        title="Your Solar Store Website"
                        subtitle={<span>Built in April 2018 for URL <a href="https://yoursolarstore.ca/" target="_blank">https://yoursolarstore.ca/</a></span>}
                        description={<p>This website was built for the sole purpose of allowing our own company to sale solar products and demo to
                            clients how our Solar Store Network service worked.</p>}
                    />
                    <ImageInfo
                        URL="./images/arrow_plumbing.png"
                        title="Arrow Plumbing &amp; Heating Website"
                        subtitle={<span>Built in June 2018 for URL <a href="https://arrowplumbing.ca/" target="_blank">https://arrowplumbing.ca/</a></span>}
                        description={<p>I was tasked to duplicate the client's existing website into FCQNS.Tech's Solar Store Network and included
                            the neccessary ecommerce pages to sale solar related items. This website was built along side the TressTech Electric
                            website.</p>}
                    />
                    <ImageInfo
                        URL="./images/tresstech.png"
                        title="TressTech Electric Website"
                        subtitle={<span>Built in June 2018 for URL <a href="https://tresstech.ca/" target="_blank">https://tresstech.ca/</a></span>}
                        description={<p>I was tasked to duplicate the client's existing website into FCQNS.Tech's Solar Store Network. In addition
                            to including the neccessary ecommerce pages to sale solar related items, I modified the original layout of the clients
                            website header for easier navigation. This website was built along side the Arrow Plumbing &amp; Heating website</p>}
                    />
                    <ImageInfo
                        URL="./images/interstellar_energy.png"
                        title="Interstellar Energy"
                        subtitle={<span>Built in August 2018 for URL <a href="https://interstellarenergy.ca/" target="_blank">https://interstellarenergy.ca/</a></span>}
                        description={<p>This solar company saw the Solar Wholesale Network service provided by my company, and request for a
                            website to be built from scratch. As always, I did most of the development work, loading in all their content and
                            solar products offered by our product wholesaler. The only difference with this client, is we added additional
                            products, such as phones, digital signs, security systems and point of sale hardware, which our company was being the
                            wholesaler of those products.</p>}
                    />
                    <ImageInfo
                        URL="./images/dryer_vent_experts.png"
                        title="Dryer Vent Experts Website"
                        subtitle={<span>Built in November 2018 for URL <a href="http://www.dryerventexperts.ca/" target="_blank">http://www.dryerventexperts.ca/</a></span>}
                        description={<p>The client came to our company asking us to built a CMS that will make it easier for them to updated
                            content, specifically the images for their slider. In response, my company decided to make an exact duplicate of the
                            website in WordPress, with the client approval. I was in charge of developing the website and ensuring that all the
                            existing content and features on the client's website were transferred over.</p>}
                    />
                    <ImageInfo
                        URL="./images/culligan_hot_tubs.png"
                        title="Culligan Hot Tubs Website"
                        subtitle={<span>Built in August 2016 for URL <a href="https://culliganhottubs.com/" target="_blank">https://culliganhottubs.com/</a></span>}
                        description={<p>This is one of my earlier projects where the client requested to for a website that will display a
                            catalogue of their hot tubs. The difficult part of this project was showing a different listing layout of their
                            products depending on which product category is being shown.</p>}
                    />
                </div>

            </section> 
        )
    }
}
import React, { Component } from "react";
import './Home.css'
import ContactForm from './ContactForm.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div id="banner-wrapper">
                    <div id="banner">
                        <div id="banner-content">
                            <span><strong>PR Plumbing</strong></span>
                            <p>
                                asdfasfasdfasdfasdfasdfasdfasdfasdfasdf <br />
                                asdfasfasdfasdfasdfasdfasdfasdfasdfasdfdfasdas
                            </p>
                            <br />
                            <Link id="work" to="/Work">VIEW OUR WORK</Link>
                        </div>
                    </div>
                </div>
                <div id="info-wrapper">
                    <p>asdfasdfasdfasdfasdfasdfasdf<br />
                        asdfasfasdfasdfasdfasdfasdfasdfasdfasdf<br />
                        asfdasdfasdf
                    </p>
                    <div id="info">
                        <Link to="/Residential">
                            <div id="residential">
                                <img src="https://steamcdn-a.akamaihd.net/steam/apps/992175/header.jpg?t=1575569035"></img>
                                <div>
                                    <strong>RESIDENTIAL</strong> <br />
                                    <p>asdfasdfasdfasdfasdfasdf</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Commercial">
                            <div id="commercial">
                                <img src="https://steamcdn-a.akamaihd.net/steam/apps/992175/header.jpg?t=1575569035"></img>
                                <div>
                                    <strong>COMMERCIAL</strong> <br />
                                    <p>asdfasdfasdfasdfasdfasdf</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div id="contact-wrapper">
                        <img src="https://steamcdn-a.akamaihd.net/steam/apps/992175/header.jpg?t=1575569035"></img>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;
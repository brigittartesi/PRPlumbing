import React, { Component } from "react";
import './Contact.css';
import ContactForm from './ContactForm.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h2>Contact</h2> <br />
                <ContactForm></ContactForm>
            </div>
        );
    }

}

export default Contact;
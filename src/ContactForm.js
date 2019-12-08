import React, { Component } from "react";
import './ContactForm.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    sendForm(event) {
        event.preventDefault();
        //if (this.validateForm()) {
        console.log(event);
        //} else {

        //}
    }

    validateForm() {

    }

    render() {
        return (
            <div id="wrapper">
                <h2>Get in touch</h2> <br />
                <form onSubmit={this.sendForm}>
                    <label>Name*</label>
                    <input type="text" id="name" name="name"></input>

                    <label>Email*</label>
                    <input type="text" id="email" name="email"></input>

                    <label>Phone*</label>
                    <input type="text" id="phone" name="phone"></input>

                    <label>Message</label>
                    <textarea rows="4" cols="50" id="message"></textarea>

                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default ContactForm;
import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Services from './Services.js';
import Contact from './Contact.js';
import About from './About.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMenuItem: "Home",
    }

    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange(event) {
    this.setState({ currentMenuItem: event.target.id });
  }

  render() {

    return (
      <Router>
        <div id="wrapper">
          <div id="menu-wrapper">
            <Menu />
          </div>

          <div id="content">
            <Switch>
              <Route exact path="(/|/home)" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/work" component={Work} />
              <Route component={Home} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
};

const Work = () => <h2>WORK</h2>

const Menu = () => (
  <ul id="menu">
    <li id="home">
      <Link to="/">PR Plumbing</Link>
    </li>
    <li>
      <Link id="contact" to="/Contact">Contact</Link>
    </li>
    <li>
      <Link to="/Services">Services</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
  </ul>
);

export default App;

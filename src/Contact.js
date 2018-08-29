import React, { Component } from 'react';
import logo from './svg/color_logo_with_background.svg';
import './App.css';
class Contact extends Component {
  render() {
     return (
      <div className="App">
      <div className="nav">
          <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About SS</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a className="active" href="/contact">Contact Us</a></li>
          </ul>
          </nav>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        

        <div className="content">
          <div className="main-content">
          	<h1 className="about-header">Contact</h1>
           <div className="contact-us">
              <h2>Priscilla Panier</h2>
              <h3>Health Coach</h3>

              <h3>
                <p>T: 1-(438)-934-4739</p>
                <p>E: <a>HealthCoach@starshapers.com</a> </p>
                <p>W: <a>www.starshapers.com</a> </p>
                <p>A: Montreal *QC* Canada </p>
              </h3>
           	</div>
          </div>
          <div className="contact">
            <h2 className="montreal">More Offers to come...</h2>
             <div className="contact-details">
              <h4>Priscilla Panier</h4>
              <h4>(Health Coach)</h4>
              <h4>T: 1-(438)-934-4739</h4>
              <h4>E: HealthCoach@starshapers.com</h4>
             </div>
          </div>
        </div>  

        <div className="footer">
          <h3 className="footer-header">CopyRight</h3>
        </div>
        
      </div>
    );
  }
}

export default Contact;

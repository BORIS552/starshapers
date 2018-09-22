import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import './App.css';
class Contact extends Component {
  render() {
     return (
      <div className="App">
      <div className="nav">
          <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who is StarShapers</a></li>
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

            <div className="footer">
            <h2>Copyright @ starshapers.com </h2>
            </div>


          </div>


          <div className="contact">
             <div className="contact-details">
              <h4>Priscila Panier</h4>
              <h4>Health Coach</h4>
              <h4>T: 1-(438)-934-4739</h4>
              <h4>A: Montreal *QC* Canada</h4>
              <h4>E: HealthCoach@starshapers.com</h4>
              <img src={priscila} className="priscila-logo-side" alt="priscila" />
             </div>
          </div>
        </div> 
        
      </div>
    );
  }
}

export default Contact;



import React, { Component } from 'react';
//import logo from './svg/color_logo_with_background.svg';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">

        <div className="nav">
         <nav>
          <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/about">Who is StarShapers</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          </nav>
        </div>

         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

         <div className="content">
          <div className="main-content">
          <iframe className="intro-video" src="https://www.youtube.com/embed/LYFBu8z3-Zw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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

export default Home;

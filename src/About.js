import React, { Component } from 'react';
import logo from './svg/color_logo_with_background.svg';
import './App.css';
class About extends Component {
  render() {
     return (
      <div className="App">
        <div className="nav">
         <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a className="active" href="/about">About SS</a></li>
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
          	<h1 className="about-header">About StarShapers </h1>
           <div className="about-us">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default About;

import React, { Component } from 'react';
import logo from './svg/color_logo_with_background.svg';
import './App.css';
import offer_one from './svg/offer_one.jpg';
import offer_two from './svg/offer_two.png';
class Corporate extends Component {
  render() {
     return (
      <div className="App">
      <div className="nav">
          <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who is StarShapers</a></li>
            <li><a className="active" href="/offers">Offers</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          </nav>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        

        <div className="content">
          <div className="main-content">
            <h1 className="about-header">One To One </h1>
           <div className="about-us">
              <table>
                <tr>
                  <td>
                    <img src={offer_one} className="offer-one" alt="logo" />
                  </td>
                  <td>
                    <p><b>Offer One</b>:</p>
                    <p>Description</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={offer_two} className="offer-two" alt="logo" />
                  </td>
                  <td>
                    <p><b>Offer Two</b>:</p>
                    <p>Description</p>
                  </td>
                </tr>
              </table>
           </div>
          </div>
          <div className="contact">
             <div className="contact-details">
              <h4>Priscila Panier</h4>
              <h4>Health Coach</h4>
              <h4>T: 1-(438)-934-4739</h4>
              <h4>A: Montreal *QC* Canada</h4>
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

export default Corporate;

import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import './App.css';
import offer_one from './svg/offer_one.jpg';
import offer_two from './svg/offer_two.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
class OneToOne extends Component {
  render() {
     return (
      <div className="App">
      <div className="nav">
          <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Who is StarShapers</a></li>
            <li><a className="active"  href="/offers">Offers</a></li>
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
                    <h3><b>Offer: Basic Kit</b>:</h3>
                    <h4 className="description">Description: 972 $ CAD ( 12 months payable = 81 $ CAD per month)
                        1 free assessment including assessment and objective planification
                        12 one to one coaching session , 1h/week one to one coaching.
                      one free gift
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={offer_two} className="offer-two" alt="logo" />
                  </td>
                  <td>
                    <h3><b>Offer Athlete Kit</b>:</h3>
                    <h4 className="description">Description: 1134 $ CAD (12 months payable = 94,5 $ CAD per month)
                        1 free assesment including assesment and objective planification
                        2 one to one coaching session, 1h/week
                        12 customized fitness coaching, 1to 2h/week
                        one free gift
                    </h4>
                  </td>
                </tr>
              </table>
           </div>
          </div>
          <div className="contact">
             <div className="contact-details">
              <h4>Priscila Panier</h4>
              <h4>Health Coach</h4>
              <h4>A: Montreal *QC* Canada</h4>
              <h4>T: 1-(438)-934-4739</h4>
              <h4>E: HealthCoach@starshapers.com</h4>
              <img src={priscila} className="priscila-logo-side" alt="priscila" />
             </div>
          </div>
        </div>  

        <div className="footer">
            <h2>Copyright @ starshapers.com </h2>
            </div>
        
      </div>
    );
  }
}

export default OneToOne;

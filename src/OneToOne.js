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
            <li><a href="https://www.goherbalife.com/starshapers/en-CA">Kick-start product</a></li>
          </ul>
          </nav>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        

        <div className="content">
          <div className="main-content">
          	<h1 className="about-header">One To One </h1>

                    <div className="onetoone-offer-one-desc">
                    <img src={offer_one} className="offer-one" alt="logo" />
                    <h3><b>Offer 1: Basic Kit</b>:</h3>
                    <h4>Description:</h4>
                    <ul>
                      <li>972 $ CAD ( 12 months payable = 81 $ CAD per month)</li>
                      <li>1 free assessment including assessment and objective planification</li>
                      <li>12 one to one coaching session</li>
                      <li>1 h/week one to one coaching</li>
                      <li>one free gift</li>
                      <br/>
                      <button>Click</button>
                    </ul>
                    </div>
                    
                    <div className="onetoone-offer-two-desc">
                    <img src={offer_two} className="offer-two" alt="logo" />
                    <h3><b>Offer 2: Athlete Kit</b>:</h3>
                    <h4>Description: </h4>
                     <ul>
                      <li>1134 $ CAD (12 months payable = 94,5 $ CAD per month)</li>
                      <li>1 free assessment including assessment and objective planification</li>
                      <li>12 one to one coaching session, 1h/week</li>
                      <li>12 customized fitness coaching, 1to 2h/week</li>
                      <li>one free gift</li>
                      <br/>
                    <button>Click</button>
                    </ul>
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

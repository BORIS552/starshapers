import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import './App.css';
import offer_one from './svg/offer_one.jpg';
//import offer_two from './svg/offer_two.png';
//import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
class Corporate extends Component {
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
            <h1 className="about-header">Corporate</h1>

              <div className="corporate-desc">
                <img src={offer_one} className="offer-one" alt="logo" />
                <br/>
                <br/>
                <ul>
                    <li>One on One coaching sessions group packages</li>
                    <li>Group conferences coaching sessions packages</li>
                </ul>    
                Please <a href="mailto:healthcoach@starshapers.com?Subject=Corporate%20Details" target="_top">Contact</a> for further details
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

export default Corporate;

import React, { Component } from 'react';
import logo from './svg/color_logo_with_background.svg';
import './App.css';
class Offers extends Component {
  constructor(props) {
    super(props);
    this.offerLeft = this.offerLeft.bind(this);
    this.offerRight = this.offerRight.bind(this);
  };

  offerLeft() {
    window.location = '/offers/onetoone';
  }
  offerRight() {
    window.location ='/offers/corporate';
  }
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
           
           <div className="offers-main">
           <h1>Offers</h1>
            <div className="offer-left">
              <button className="offer-left-button" onClick = {this.offerLeft}/>
              <p>One to One</p>
            </div>
            <div className="offer-right">
              <button className="offer-right-button" onClick = {this.offerRight}/>
              <p>Corporate</p>
            </div>
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

export default Offers;

import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
//import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
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
            <li><a href="https://www.goherbalife.com/starshapers/en-CA">Kick-start product</a></li>
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
            <div className="footer">
            <h2>Copyright @ starshapers.com </h2>
            </div>
          </div>
          
        </div> 
        
      </div>
    );
  }
}

export default Offers;



import React, { Component } from 'react';
import logo from './svg/color_logo_with_background.svg';
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
            
            <div className="intro-video">
            <h1>Introduction video</h1>

              <iframe width="70%" height="600" src="https://www.youtube.com/embed/LYFBu8z3-Zw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="demo"></iframe>
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

export default Home;

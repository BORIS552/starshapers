import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import './App.css';
class Contact extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  handleSubmit(event){    
  }

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
            <li><a href="https://www.goherbalife.com/starshapers/en-CA">Kick-start product</a></li>
          </ul>
          </nav>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
<div className="content">
          <div className="main-content">
              <div className="contact-us">
                <div className="contact-us-outer-box">
                  <div className="contact-us-inner-box">
                          <div class="form-style-6">
                            <h1>Contact Us</h1>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <input type="text" placeholder="Your Name" />
                                <input type="email"  placeholder="Email Address" />
                                <input type="number" placeholder="Phone Number" />
                                <textarea  placeholder="Type your Message"></textarea>
                                <input type="submit" value="Send" />
                            </form>
                          </div>
                  </div>
                </div>  
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



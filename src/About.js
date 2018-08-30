import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import certificate_one from './starshapers_logo/priscila_certificates/certificate_one.png';
import certificate_two from './starshapers_logo/priscila_certificates/certificate_two.jpeg';
import certificate_three from './starshapers_logo/priscila_certificates/certificate_three.png';
import './App.css';
class About extends Component {
  render() {
     return (
      <div className="App">
        <div className="nav">
         <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a className="active" href="/about">Who is StarShapers</a></li>
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

            <h3 className="about-header">What is StarShapers.com </h3>
            <div className="about-us">
              <p>Starshapers.com is an organization that helps people who want to achieve their own specific balance goal throughout steps actions engineering, coaching and day to day implementing:</p>
              <ul>
                <li>Metabolic and digestive type profile identification</li>
                <li>Food and nurturing relationship re-education</li>
                <li>Eater friendly habits change</li>
                <li>Nutrients knowledge improvement</li>
                <li>Realistic balance goal phasing</li>
                <li>Steps action taking weekly accountability</li>
                <li>Cooking and preparing coaching</li>
                <li>Body sculpture no torture coaching</li>
                <li>Acknowledgement of results process accountability and</li>
                <li>Rewarding! The experience of people who also encountered difficult life paths and turned <br/>
                    them into their strenghts.</li>
              </ul>
              <h4>Be balanced, be the best you can be!</h4>
              <div className="certificates">
              <img src={certificate_one} className="certificate-one" alt="certificate_one" />
              <img src={certificate_two} className="certificate-two" alt="certificate_two" />
              <img src={certificate_three} className="certificate-three" alt="certificate_three" />
            </div>
            </div>

            


            <div className="footer">
            <h2>Copyright @ starshapers.com </h2>
            </div>

          </div>
          <div className="contact">
            <h2 className="montreal">More Offers to come...</h2>
             <div className="contact-details">
              <h4>Priscilla Panier</h4>
              <h4>(Health Coach)</h4>
              <h4>T: 1-(438)-934-4739</h4>
              <h4>E: HealthCoach@starshapers.com</h4>
              <img src={priscila} className="priscila-logo-side" alt="priscila" />
             </div>
          </div>
        </div> 

      </div>
    );
  }
}

export default About;




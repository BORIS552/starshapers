import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
//import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import certificate_one from './starshapers_logo/priscila_certificates/certificate_one.png';
import certificate_two from './starshapers_logo/priscila_certificates/certificate_two.jpeg';
import certificate_three from './starshapers_logo/priscila_certificates/certificate_three.png';
import Modal from 'react-responsive-modal';
import './App.css';
class About extends Component {
  constructor() {
    super();
    this.state = {
    open: false,
    cert_one: false,
    cert_two: false,
    cert_three: false
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  

  onOpenModal(id){
    if (id === 1) {
      this.setState({cert_one: true});
      this.setState({cert_two: false});
      this.setState({cert_three: false});

    }else if(id === 2){
      this.setState({cert_one: false});
      this.setState({cert_two: true});
      this.setState({cert_three: false});
    }else {
      this.setState({cert_one: false});
      this.setState({cert_two: false});
      this.setState({cert_three: true});
    }
    this.setState({ open: true });
  };

  onCloseModal(id){
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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

            <h3 className="about-header">Who is StarShapers.com </h3>
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



             

                <img onClick={() => this.onOpenModal(1)} src={certificate_one} className="certificate-one" alt="certificate_one" />
                <img onClick={() => this.onOpenModal(3)} src={certificate_three} className="certificate-three" alt="certificate_three" />
                <img onClick={() => this.onOpenModal(2)} src={certificate_two} className="certificate-two" alt="certificate_two" />
              
                {
                  this.state.cert_one ?
                  <Modal open={open} onClose={this.onCloseModal} center>
                    <img src={certificate_one} className="certificate-one-modal" alt="certificate_one" />
                </Modal>
                :
                null
                }

                {
                  this.state.cert_three ?
                  <Modal open={open} onClose={this.onCloseModal} center>
                    <img src={certificate_three} className="certificate-one-modal" alt="certificate_one" />
                </Modal>
                :
                null
                }


                {
                  this.state.cert_two ?
                  <Modal open={open} onClose={this.onCloseModal} center>
                    <img src={certificate_two} className="certificate-one-modal" alt="certificate_one" />
                </Modal>
                :
                null
                }
              
              
              
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

export default About;




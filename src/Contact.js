import React, { Component } from 'react';
import logo from './starshapers_logo/png/color_logo_transparent.png';
import priscila from './starshapers_logo/priscila/priscila_one.jpeg';
import './App.css';
import firebase from './firebase.js';
import Modal from 'react-responsive-modal';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
        name: '',
        email: '',
        phone: '',
        package_type: 'Basic Kit',
        message: '',
        open: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSelectChange(e) {
    this.setState({
      package_type: e.currentTarget.value
    });
  }
  onCloseModal() {
    this.setState({
      open: false
    })
  }
  handleSubmit(e){ 
    e.preventDefault();
    console.log("name : "+ this.state.name );
    console.log("email : "+ this.state.email );
    console.log("phone : "+ this.state.phone );
    console.log("package_type :"+ this.state.package_type);
    console.log("message : "+ this.state.message );

    const contactsRef = firebase.database().ref('contacts');

    const contact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      package_type: this.state.package_type,
      message: this.state.message
    }

    contactsRef.push(contact);

    this.setState({
      open: true
    });

    this.setState({
      name: '',
      email: '',
      phone: '',
      package_type: '',
      message: ''
    });
  }

  render() {
    const { open } = this.state;
    
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
                                <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} value={this.state.name} />
                                <input type="email"  name="email" placeholder="Email Address" onChange={this.handleChange} value={this.state.email} />
                                <input type="number" name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />
                                <select placeholder="Select a package" onChange={this.handleSelectChange} defaultValue={this.state.package_type}>
                                  <option value="Basic Kit">Basic Kit</option>
                                  <option value="Athlete Kit">Athlete Kit</option>
                                  <option value="Corporate">Corporate</option>
                                </select> 
                                <br/>
                                <textarea  name="message" placeholder="Type your Message" onChange={this.handleChange} value={this.state.message} />
                                <input type="submit" value="Send" />
                            </form>
                            <Modal open={open} onClose={this.onCloseModal} center>
                              <h2>Thanks for contacting us! we will get back to you soon...</h2>
                            </Modal>
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



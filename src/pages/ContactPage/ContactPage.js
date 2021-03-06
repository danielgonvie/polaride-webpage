import React, { Component } from "react";
import "./ContactPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import emailjs from 'emailjs-com';



export default class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.title = "contact";
    this.messageBody = "";
    this.fromName = "";
    this.contactMail = "";

    this.state={
      sent: false,
  }

    emailjs.init(process.env.REACT_APP_USERAPI);
  }

  sendEmail = (e) => {
    e.preventDefault();

    this.setState({...this.state, sent: true})

    let name = document.querySelector("input[name='fromName']").value;
    let mail = document.querySelector("input[name='contactMail']").value;
    let message = document.querySelector("textarea[name='messageBody']").value;
    let templateParams = {
      fromName: name,
      contactMail: mail,
      messageBody: message
    }

    emailjs.send('mailgun', process.env.REACT_APP_TEMPLATE, templateParams, process.env.REACT_APP_USERAPI)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  anotherEmail() {
    this.setState({...this.state, sent: false})
  }

    render() {

      if(this.state.sent){
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
              <div className="contact new-class">
                <div className="div-secondary"></div>
                <img className="title-img contact-img contact-land" src="images/Contact.png" alt=""></img>
              </div>
              <div className="form-container ">
                <div className="contact-mobile-info smartphone">
                  <div className="contact-info">
                    <p className="text-mobile">paula@polaride.com</p>
                    <a href="tel:+34662093346"><p className="text-mobile">+34 662 093 346</p></a>
                  </div>
                  <div className="all-logos">
                    <a className="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img className="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                    <a className="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img className="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                  </div>
                </div>
                <div className="success-message">
                  <h4 className="title-success">¡Tu mensaje se ha enviado correctamente!</h4>
                  <p className="parragraph-success">Pronto nos pondremos en contacto contigo.</p>
                  <button className="form-field button-success" value="ENVIAR" onClick={ev => this.anotherEmail()} >Enviar otro mensaje</button>

                </div>
              </div>
              <Footer></Footer>
          </React.Fragment>
        );
    } else {
      return (
        <React.Fragment>
            <Navbar title={this.title}></Navbar>
            <div className="contact new-class">
              <div className="div-secondary"></div>
              <img className="title-img contact-img contact-land" src="images/Contact.png" alt=""></img>
            </div>
            <div className="form-container ">
              <div className="contact-mobile-info smartphone">
                <div className="contact-info">
                  <p className="text-mobile">info@polaride.com</p>
                  <a href="tel:+34662093346"><p className="text-mobile">+34 662 093 346</p></a>
                </div>
                <div className="all-logos">
                  <a className="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img className="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                  <a className="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img className="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                </div>
              </div>
              <form className="contact-form pc" onSubmit={this.sendEmail}>
                <input className="form-field" type="text" name="fromName" placeholder=" NOMBRE / EMPRESA *" required></input>
                <input className="form-field" type="email" name="contactMail" placeholder=" E-MAIL *" required></input>
                <textarea className="form-field" name="messageBody"  placeholder=" MENSAJE *" maxLength="6000" required></textarea>
                <button className="form-field" type="submit" value="ENVIAR">ENVIAR</button>
              </form>
            </div>
            <Footer></Footer>
        </React.Fragment>
      );
    }
  }
}
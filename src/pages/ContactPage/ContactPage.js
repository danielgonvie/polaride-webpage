import React, { Component } from "react";
import "./ContactPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.title = "contact";
  }

    render() {
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
                <form className="contact-form pc" action="mailto:daniel.gonvie@gmail.com" method="post" encType="text/plain">
                  <input className="form-field" type="text" name="nombre" placeholder=" NOMBRE / EMPRESA *" required></input>
                  <input className="form-field" type="email" name="correo" placeholder=" E-MAIL *" required></input>
                  <textarea className="form-field" name="mensaje"  placeholder=" MENSAJE *" maxLength="6000" required></textarea>
                  <input className="form-field" type="submit" value="ENVIAR"></input>
                </form>
              </div>
              <Footer></Footer>
          </React.Fragment>
        );
      }
}
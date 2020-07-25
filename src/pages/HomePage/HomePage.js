import React, { Component } from "react";
import "./HomePage.scss";
import NavbarOption from "../../components/NavbarOption/NavbarOption";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.title = "/";
        this.maintenance=true;
      }

    render() {
        if(this.maintenance){
            return (
                <React.Fragment>
                    <div className="landing-background overflow-no pc">
                    <div className="main-content">
                        <img className="polaride-logo element" src="images/Polaride.png" alt=""></img>
                        <p className="warning">¡Página en mantenimiento, disculpa las molestias!</p>
                        <div>
                            <a className="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img className="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                            <a className="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img className="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                        </div>   
                      </div>
                    </div>

                    <div className="landing-maintenance smartphone">
                        <div className="bg-polaride-maintenance">
                            <img src="/images/Polaride.png" alt=""></img>
                        </div>
                        <p className="warning">¡Página en mantenimiento!</p>
                        <p className="warning">Por favor, vuelve más tarde :)</p>
                        <div className="emergency-logos">
                            <a className="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img className="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                            <a className="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img className="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                        </div>   
                    </div>
                </React.Fragment>
            );

        }else{
            return (
                <React.Fragment>
                  <div className="landing-background">
                      <div className="main-content">
                      <div classNameName="nav-bar">
                          {this.title === "/" ? <NavbarOption option="/" selected></NavbarOption> : <NavbarOption option="/"></NavbarOption>}
                          {this.title === "photo" ? <NavbarOption option="photo" selected></NavbarOption> : <NavbarOption option="photo"></NavbarOption>}
                          {this.title === "video" ? <NavbarOption option="video" selected></NavbarOption> : <NavbarOption option="video"></NavbarOption>}
                          {this.title === "contact" ? <NavbarOption option="contact" selected></NavbarOption> : <NavbarOption option="contact"></NavbarOption>}
                      </div>
                          <img className="polaride-logo element" src="images/Polaride.png" alt=""></img>
                          <p className="mobile-text ">PHOTOGRAPHY & VIDEO</p>
                      </div>
                  </div>
                  <Link to="photo">
                      <div className="landing-photo">
                          <div className="opacity-div"></div>
                          <img className="title-img photo-land" src="images/Photography.png" alt=""></img>
                      </div>
                      </Link>
                      <Link to="video">
                      <div className="landing-video">
                          <div className="opacity-div"></div>
                          <img className="title-img video-land" src="images/Films.png" alt=""></img>
                      </div>
                      </Link>
                      <Link to="contact">
                          <div className="landing-contact">
                              <div className="opacity-div"></div>
                              <img className="title-img contact-land" src="images/Contact.png" alt=""></img>
                          </div>
                      </Link>
                      <Footer></Footer>
                </React.Fragment>
              );

        }

      }
}
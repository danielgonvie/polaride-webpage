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
                    <div class="landing-background">
                    <div class="main-content">
                          <img class="polaride-logo element" src="images/Polaride.png" alt=""></img>
                          <p class="warning">¡Página en mantenimiento,disculpa las molestias!</p>
                      </div>
                    </div>
                </React.Fragment>
            );

        }else{
            return (
                <React.Fragment>
                  <div class="landing-background">
                      <div class="main-content">
                      <div className="nav-bar">
                          {this.title === "/" ? <NavbarOption option="/" selected></NavbarOption> : <NavbarOption option="/"></NavbarOption>}
                          {this.title === "photo" ? <NavbarOption option="photo" selected></NavbarOption> : <NavbarOption option="photo"></NavbarOption>}
                          {this.title === "video" ? <NavbarOption option="video" selected></NavbarOption> : <NavbarOption option="video"></NavbarOption>}
                          {this.title === "contact" ? <NavbarOption option="contact" selected></NavbarOption> : <NavbarOption option="contact"></NavbarOption>}
                      </div>
                          <img class="polaride-logo element" src="images/Polaride.png" alt=""></img>
                          <p class="mobile-text ">PHOTOGRAPHY & VIDEO</p>
                      </div>
                  </div>
                  <Link to="photo">
                      <div class="landing-photo">
                          <div class="opacity-div"></div>
                          <img class="title-img photo-land" src="images/Photography.png" alt=""></img>
                      </div>
                      </Link>
                      <Link to="video">
                      <div class="landing-video">
                          <div class="opacity-div"></div>
                          <img class="title-img video-land" src="images/Films.png" alt=""></img>
                      </div>
                      </Link>
                      <Link to="contact">
                          <div class="landing-contact">
                              <div class="opacity-div"></div>
                              <img class="title-img contact-land" src="images/Contact.png" alt=""></img>
                          </div>
                      </Link>
                      <Footer></Footer>
                </React.Fragment>
              );

        }

      }
}
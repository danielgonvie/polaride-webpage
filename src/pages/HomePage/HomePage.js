import React, { Component } from "react";
import "./HomePage.scss";
import NavbarOption from "../../components/NavbarOption/NavbarOption";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.title = "/";
      }

    render() {
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
          </React.Fragment>
        );
      }
}
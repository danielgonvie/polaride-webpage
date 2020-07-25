import React, { Component } from "react";


import "./Navbar.scss";
import NavbarOption from "../../components/NavbarOption/NavbarOption";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
      }

    render() {
        return (
          <React.Fragment>
            <div className="page-header">
                <div className="polaride-head">
                    <div className="bg-polaride">
                        <img src="/images/Polaride.png" alt=""></img>
                    </div>
                    <div className="nav-bar on-top">
                        {this.title === "/" ? <NavbarOption option="/" selected></NavbarOption> : <NavbarOption option="/"></NavbarOption>}
                        {this.title === "photo" ? <NavbarOption option="photo" selected></NavbarOption> : <NavbarOption option="photo"></NavbarOption>}
                        {this.title === "video" ? <NavbarOption option="video" selected></NavbarOption> : <NavbarOption option="video"></NavbarOption>}
                        {this.title === "contact" ? <NavbarOption option="contact" selected></NavbarOption> : <NavbarOption option="contact"></NavbarOption>}
                    </div>
                </div>
            </div>
          </React.Fragment>
        );
      }
}
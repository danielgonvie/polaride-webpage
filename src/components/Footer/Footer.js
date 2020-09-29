import React, { Component } from "react";

import "./Footer.scss";

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
      }

    render() {
        return (
          <React.Fragment>
                <div className="footer">
                    <div className="centered-footer pc">
                        <div className="all-logos">
                            <a className="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img className="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                            <a className="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img className="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                        </div>
                        <div className="based-in">
                            <p>Based in</p>
                            <p> Madrid & Galicia</p>
                        </div>
                        <div className="contact-info">
                            <p>paula@polaride.com</p>
                            <p>+34 662 093 346</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright© 2020 Polaride | All Rights Reserved.</p>
                    </div>
                </div>
          </React.Fragment>
        );
      }
}
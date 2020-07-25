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
                <div class="footer">
                    <div class="centered-footer no-pc">
                        <div class="all-logos">
                            <a class="rrss-logo-instagram" href="https://www.instagram.com/polaridefilm/" ><img class="rrss-logo-instagram" src="images/Logo Instagram.png" alt=""></img></a>
                            <a class="rrss-logo-linkedin" href="https://www.linkedin.com/in/paula-correa/" ><img class="rrss-logo-linkedin" src="images/LogoLinkedin.png" alt=""></img></a>
                        </div>
                        <div class="based-in">
                            <p>Based in</p>
                            <p> Madrid & Galicia</p>
                        </div>
                        <div class="contact-info">
                            <p>info@polaride.com</p>
                            <p>+34 662 093 346</p>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright© 2020 Polaride | All Rights Reserved.</p>
                    </div>
                </div>
          </React.Fragment>
        );
      }
}
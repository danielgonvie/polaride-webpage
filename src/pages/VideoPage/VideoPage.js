import React, { Component } from "react";
import "./VideoPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class VideoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "video";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
              <div className="contact new-class">
                <div className="div-secondary"></div>
                <img className="title-img contact-img contact-land" src="images/Films.png" alt=""></img>
              </div>
              <Footer></Footer>
          </React.Fragment>
        );
      }
}
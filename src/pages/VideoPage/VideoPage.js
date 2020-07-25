import React, { Component } from "react";
import "./VideoPage.scss";
import Navbar from "../../components/Navbar/Navbar";

export default class VideoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "video";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
          </React.Fragment>
        );
      }
}
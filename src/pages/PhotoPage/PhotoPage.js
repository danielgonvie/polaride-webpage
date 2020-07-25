import React, { Component } from "react";
import "./PhotoPage.scss";
import Navbar from "../../components/Navbar/Navbar";

export default class PhotoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "photo";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
          </React.Fragment>
        );
      }
}
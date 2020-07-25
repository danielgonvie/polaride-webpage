import React, { Component } from "react";
import "./ContactPage.scss";
import Navbar from "../../components/Navbar/Navbar";

export default class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.title = "contact";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
          </React.Fragment>
        );
      }
}
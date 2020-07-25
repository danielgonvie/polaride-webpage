import React, { Component } from "react";
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.title = "/";
      }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
          </React.Fragment>
        );
      }
}
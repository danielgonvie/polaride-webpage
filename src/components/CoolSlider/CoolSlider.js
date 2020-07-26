import React, { Component } from "react";

import "./CoolSlider.scss";

export default class CoolSlider extends Component {

    constructor(props) {
        super(props);
        this.img = this.props.img;
      }

    render() {
        return (
            <div onClick = {this.props.zoom} className="cool-div">
                <img className="marco  cool-photo" src={this.img} alt=""></img>
            </div>
        );
      }
}
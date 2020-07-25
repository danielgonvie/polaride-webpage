import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavbarOption.scss";

export default class NavbarOption extends Component {

    constructor(props) {
        super(props);
        this.option = (this.props.option === "/") ? "home" : this.props.option;
        this.selected = (!this.props.selected) ? "" : "chosen";
      }

    fancyHover = (id) => {
        if(this.selected !== "chosen"){
            let el = document.getElementById(id);
            el.classList.remove("out");
            el.classList.add("dynamic");
        }
      }

    fancyOut = (id) => {
        if(this.selected !== "chosen"){
            let el = document.getElementById(id);
            el.classList.remove("dynamic");
            el.classList.add("out");
        }
      }

    render() {
        return (
          <React.Fragment>
            <div className="nav-option "  onMouseOver={ev => this.fancyHover(this.option)} onMouseOut={ev => this.fancyOut(this.option)} >
                <div className="the-hard-one">
                    {this.selected === "chosen" ?
                    <React.Fragment>
                    <div id={this.option} className="marker"></div>
                    <Link to={this.props.option}><h3 className="option secondary chosen ">{this.option.toUpperCase()}</h3></Link>
                    </React.Fragment>
                     :
                    <React.Fragment>                    
                    <div id={this.option} className="pseudo-marker"></div>
                    <Link to={this.props.option}><h3 className="option secondary ">{this.option.toUpperCase()}</h3></Link>
                    </React.Fragment>
                     }
                    
                </div>
            </div>
          </React.Fragment>
        );
      }
}
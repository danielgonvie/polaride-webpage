import React, { Component } from "react";

import "./FotoZoom.scss";

export default class FotoZoom extends Component {

    constructor(props) {
        super(props);
        this.img = this.props.img;
        this.state={
            img: "",
            show: false
        }
      }


      componentWillReceiveProps({img}) {
          console.log("pero hijo", img);
        this.setState({...this.state, img: img, show: true})
      }

      hidePhoto() {
        this.setState({...this.state, show: false})
      }

    render() {
        if(this.state.show){
            return (
                <div onClick={ev => this.hidePhoto()} className="wide-dive">
                    <img className="zoomed-img" src={this.state.img} alt=""></img>
                </div>
            );
        } else {
            return (
                <div className="wide-dive hidden">
                    <img className="zoomed-img" src={this.state.img} alt=""></img>
                </div>
            );   
        }
      }
}
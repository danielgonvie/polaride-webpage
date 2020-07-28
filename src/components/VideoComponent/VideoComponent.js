import React, { Component } from "react";

import "./VideoComponent.scss";

export default class VideoComponent extends Component {

    constructor(props) {
        super(props);
        this.media = this.props.media;
        this.image = this.props.image;
        this.title = this.props.title;
        this.id = `video-${this.title}`
      }


    vanish = (id) =>{
        let el = document.getElementById(id);
        el.classList.add("hidden");
        let yt = document.getElementById(`${this.id}`);
        yt.src=`${this.media}?autoplay=1`; 
      }


    render() {

            return (
                <div className="video-container">
                    <div  className="cover " onClick={ev => this.vanish(`${this.title}`)}>
                        <div id={this.title} className="valle">
                            <img className="real-cover" src={this.image} alt="" />
                            <img className="play" src="images/Play.png" alt=""/>
                        </div>
                        
                        <iframe title="wat" id={this.id} src={this.media}></iframe>
                    </div>  
                </div>
            )
      }
}
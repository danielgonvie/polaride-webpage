import React, { Component } from "react";
import "./VideoPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import VideoComponent from "../../components/VideoComponent/VideoComponent";

export default class VideoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "video";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
              <div className="video-main new-class">
                <div className="div-secondary"></div>
                <img className="title-img video-img video-land" src="images/Films.png" alt=""></img>
                <video className="background-video-landing pc" poster="./pantin02.jpg" loop autoPlay playsInline muted preload="auto" src="images/VideoPantin.mp4">
				            <source type="video/mp4" src="images/VideoPantin.mp4"></source>
			            </video>
              </div>
              <VideoComponent title="valle" media="https://www.youtube.com/embed/q-Z0F21K4Kg" image="images/PolarideVideo2.jpg"></VideoComponent>
              <VideoComponent title="sombra" media="https://www.youtube.com/embed/VXeoRtnwYf0" image="images/PolarideVideo.jpg"></VideoComponent>
              <VideoComponent title="abanca" media="https://www.youtube.com/embed/UhkC5hIBIgc" image="images/PolarideVideo-2.JPG"></VideoComponent>
              <VideoComponent title="jerte" media="https://www.youtube.com/embed/grja5EBwwkI" image="images/PolarideVideo4.jpg"></VideoComponent>

              <Footer></Footer>
          </React.Fragment>
        );
      }
}
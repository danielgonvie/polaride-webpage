import React, { Component } from "react";
import "./PhotoPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class PhotoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "photo";
  }

    render() {
        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
              <div className="photo new-class">
                <div className="div-secondary"></div>
                <img className="title-img photo-img" src="images/Photo.png" alt=""></img>
              </div>
              <div className="carrousell smartphone">

              </div>
              <div className="great-container pc">
                <div className="photo-container">
                  <img className="marco first" src="images/PolaridePhotoEdu-2.JPG" alt=""></img>
                </div>
                <div className="photo-container">
                  <img className="marco asia-cerca" src="images/PolaridePhotokiu-1.JPG" alt=""></img>
                  <img className="marco asia-lejos" src="images/PolaridePhotoKiu.JPG" alt=""></img>
                </div>
                <div className="photo-container">
                  <img className="marco asiatica" src="images/PolaridePhotoKiu-2.JPG" alt=""></img>
                  <img className="marco top-model" src="images/PolaridePhotoEs-1.JPG" alt=""></img>
                  <img className="marco gangsta" src="images/PolaridePhotoEdu-1.JPG" alt=""></img>
                </div>
                <div className="photo-container-2">
                  <img className="marco manu-vias" src="images/PolaridePhotoMeur.JPG" alt=""></img>
                  <img className="marco manu-cerca" src="images/PolaridePhotoMeur-1.JPG" alt=""></img>
                </div>
                <div className="photo-container-2">
                  <img className="marco boda-izq" src="images/PolaridePhotoOscar-5.JPG" alt=""></img>
                  <img className="marco boda-der" src="images/PolaridePhotoOscar-4.JPG" alt=""></img>
                </div>
                <div className="photo-container">
                  <img className="marco first" src="images/PolaridePhotoYoli.JPG" alt=""></img>
                </div>
              </div>
              <Footer></Footer>
          </React.Fragment>
        );
      }
}
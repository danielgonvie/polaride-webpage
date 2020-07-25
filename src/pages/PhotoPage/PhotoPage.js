import React, { Component } from "react";
import "./PhotoPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class PhotoPage extends Component {

  constructor(props) {
    super(props);
    this.title = "photo";
  }

    render() {

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

        return (
          <React.Fragment>
              <Navbar title={this.title}></Navbar>
              <div className="photo new-class">
                <div className="div-secondary"></div>
                <img className="title-img photo-img" src="images/Photo.png" alt=""></img>
              </div>
              <div className="carrousell smartphone">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode
                  className="lol"
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass="cool-item"
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={responsive}
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <div className="cool-div"><img className="marco  cool-photo" src="images/PolaridePhotoEdu-2.JPG" alt=""></img></div>
                  <div className="cool-div"><img className="marco  cool-photo" src="images/PolaridePhotokiu-1.JPG" alt=""></img></div>
                  <div className="cool-div"><img className="marco  cool-photo" src="images/PolaridePhotoKiu.JPG" alt=""></img></div>
                  <div className="cool-div"><img className="marco  cool-photo" src="images/PolaridePhotoKiu-2.JPG" alt=""></img></div>
                </Carousel>
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
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default class App extends Component {


  render() {

    const NoMatch = ({ location }) => (
      <div className="nomatch-component">
        <Navbar title=""></Navbar>
        <div className="nomatch-body">
          <h3 className="nomatch-info">
          No se encontró <code>{location.pathname}</code>
          </h3>
          <h3 className="nomatch-info">La página a la que has intentado acceder no existe.</h3>
        </div>
        <Footer></Footer>
      </div>
    );

    return (
      <div>
          <Switch>
            <Route
              exact
              path="/"
              render={match => (
                <HomePage></HomePage>
              )}
            />
            <Route
              exact
              path="/photo"
              render={match => (
                <PhotoPage></PhotoPage>
              )}
            />
            <Route
              exact
              path="/video"
              render={match => (
                <VideoPage></VideoPage>
              )}
            />
            <Route
              exact
              path="/contact"
              render={match => (
                <ContactPage></ContactPage>
              )}
            />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

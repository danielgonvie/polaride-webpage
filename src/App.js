import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import ContactPage from "./pages/ContactPage/ContactPage";

export default class App extends Component {


  render() {

    const NoMatch = ({ location }) => (
      <div className="nomatch-component">
        <img
          className="no-gif"
          src="https://media2.giphy.com/media/ly8G39g1ujpNm/giphy.gif?cid=790b761142e4c6ee9a3e38ce715d90695af72b14bdcd671f&rid=giphy.gif"
          alt="404"
        ></img>
        <h3 className="nomatch-info">
        No se encontró <code>{location.pathname}</code>
        </h3>
        <h3 className="nomatch-info">¿Estás perdido? Parece que sí</h3>
        <Link className="safe-link" to="/">
          <h3 className="nomatch-button">Sácame de aquí!</h3>
        </Link>
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

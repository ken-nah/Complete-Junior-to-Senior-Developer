import React, { Component } from "react";
import "./App.css";

/* components */
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

class App extends Component {
  state = {
    route: "page1"
  };

  routeHandler = route => {
    this.setState({ route });
  };

  render() {
    if (this.state.route === "page1") {
      return <Page1 onRouteChange={this.routeHandler} />;
    } else if (this.state.route === "page2") {
      return <Page2 onRouteChange={this.routeHandler} />;
    } else if (this.state.route === "page3") {
      return <Page3 onRouteChange={this.routeHandler} />;
    }
  }
}

export default App;

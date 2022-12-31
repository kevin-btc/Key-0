import React, { Component } from "react";

import Hero from "../components/Hero/Hero";
import Explore from "../components/Explore/Explore";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Hero />
        <Explore loadBtn />
      </div>
    );
  }
}

export default Home;

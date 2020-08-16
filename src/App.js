import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

// components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      {/* about me section */}
      <div>
        <Parallax blur={{ min: -1000, max: 1000 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-300}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      {/* skills  section */}

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;

import "./styles.css";
import IconLogo from "./images/cd-logo.png";
import IconGithub from "./images/github.png";
import IconReact from "./images/react-js-icon.svg";

import {Link} from "react-scroll";

import FlagPL from "./images/poland-flag-icon.svg";
import FlagUS from "./images/united-states-flag-icon.svg";

export default function App() {
  return (
    <div className="App">
      <div className="menu-all">
        <div className="menu">
          <Link id="up" to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          <Link to="roadmaps" spy={true} smooth={true} offset={50} duration={500}>Roadmaps</Link>
          <Link to="resources" spy={true} smooth={true} offset={50} duration={500}>Resources</Link>
          <Link className="join-us" to="/" spy={true} smooth={true} offset={50} duration={500}>Join Our Team!</Link>
        </div>
      </div>
      <div className="main-content-all">
        <div className="main-content">
          <div className="content-text">
          <img className="logo" src={IconLogo} alt="Logo" width="480" />
            <div className="text">
              <h1><span className="aqua-color">#1 </span>Loresam ipsusm dolo Sitas-Ame <span className="aqua-color"> Consectetu!</span></h1>
              <p>
                The #1 front-end devs server community. This server will be your guide
                for your journey! Explore your skills and interact with the other
                developers. Open for all developers!
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="roadmaps" className="roadmapss-container">
       <h1 className="roadmapss"><span className="aqua-color">Roadmaps : <img className="icon" src={IconReact} alt="Logo" width="35" /></span></h1>
      </div>
      <div className="RoadmapsAll">
        <div className="containerTechs">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            You just learn the basics. Semantics, Forms & Validations,
            Accesibilty, SEO. This course tackle on how to structure your page.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
        <div className="containerTechs">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            You just learn the basics. Semantics, Forms & Validations,
            Accesibilty, SEO. This course tackle on how to structure your page.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
        <div className="containerTechs">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            This tutorial will help u to styling your page and mastering the
            layouts. Your main goal is to learn the Flexbox, CSS Grid and using.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
      </div>
      <div className="RoadmapsAll">
        <div className="containerTechs2">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            This tutorial tackle Syntax & Basic Constructs, DOM, Objects &
            Arrays & Methods, Fetch API, OOP, Functional and Modular JS
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
        <div className="containerTechs2">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            This tutorial tackle Syntax & Basic Constructs, DOM, Objects &
            Arrays & Methods, Fetch API, OOP, Functional and Modular JS
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
        <div className="containerTechs2">
          <div className="icon-title">
            <img className="icon" src={IconReact} alt="Logo" width="26.5" />
            <h3>LEARN REACT TUTORIAL</h3>
          </div>
          <p>
            This tutorial tackle Syntax & Basic Constructs, DOM, Objects &
            Arrays & Methods, Fetch API, OOP, Functional and Modular JS
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/OXGznpKZ_sA"
          >
            Click this
          </a>
        </div>
      </div>
      <div id="resources" className="ResourcesAll">
        <div className="roadmapss-container">
          <h1 className="roadmapss"><span className="aqua-color">Resources : <img className="icon" src={IconReact} alt="Logo" width="35" /></span></h1>
          <p>Resources that you must try to enhance your skill as a front-end developer!</p>
        </div>
        <div className="yt-all">
          <div className="containerYT">
            <h3>Flexboxfroggy</h3>
            <iframe className="yt-video"
              title="myFrame"
              width="620"
              height="400"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?=1&mute=1"
            ></iframe>
          </div>
            <div className="containerYT">
              <h3>CSS Grid Garden</h3>
              <iframe className="yt-video"
                title="myFrame"
                width="620"
                height="400"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?=1&mute=1"
              ></iframe>
            </div>
        </div>
        <div className="yt-all">
          <div className="containerYT">
            <h3>Flexboxfroggy</h3>
            <iframe className="yt-video"
              title="myFrame"
              width="620"
              height="400"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?=1&mute=1"
            ></iframe>
          </div>
            <div className="containerYT">
              <h3>CSS Grid Garden</h3>
              <iframe className="yt-video"
                title="myFrame"
                width="620"
                height="400"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?=1&mute=1"
              ></iframe>
            </div>
        </div>

      </div>
      <div className="DeployAll">
        <div className="deploy-container">
          <h1 className="deploy-text">Deploy your website in a <span className="aqua-color">real world!</span></h1>
        </div>
        <div className="DeployPhotos">
          <img src={IconGithub} alt="Logo" width="450" className="OnePhoto" />
          <img src={IconGithub} alt="Logo" width="450" className="OnePhoto" />
          <img src={IconGithub} alt="Logo" width="450" className="OnePhoto" />
        </div>
      </div>
      <div className="buttons-two-conteiner">
        <Link className="button-two" to="up" spy={true} smooth={true} offset={50} duration={1700}>SCROLL UP</Link>
        <a className="button-two" href="https://daku720.github.io/portfolio/"rel="noreferrer">BACK TO PORTFOLIO</a>
      </div>
      <div id="footer-test" class="footer">
        <div class="footerFlags">
          <img className="flag" src={FlagPL} alt="Logo" width="32" />
          <img className="flag" src={FlagUS} alt="Logo" width="32" />
        </div>
        <p>Created by David K. 2023 &copy;</p>
      </div>
    </div>
  );
}

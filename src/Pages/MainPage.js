import React from "react";
import LuneLogo from "../images/Site/logo_white.png";
import LuneDev from "../images/Site/logotype_white.png";
import { RiLinkedinBoxFill, RiFacebookBoxFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import { BsGlobe2 } from 'react-icons/bs'
import { Link } from "react-router-dom";
// import Title from "../components/Title";
import "./Mainpage.css"

class MainPage extends React.Component {
  render() {
    return(
  <div className="main-page-bg">
    <main className="content">
        <div>
          <img id="main-page-img1" src={LuneLogo} alt="lune logo" />
          <img id="main-page-img2" src={LuneDev} alt="lune logo" />
        </div>
        <div className="links">
          <div className="icon-style">
            <RiLinkedinBoxFill size={34} />
            <a className="main-page-links" href="https://www.linkedin.com/company/lune-dev/">LinkedIn</a>
          </div>
          <div className="icon-style">
            <RiFacebookBoxFill size={32} />
            <a className="main-page-links" href="https://www.facebook.com/Lune-Dev-101657722392241/">Facebook</a>
          </div>
          <div className="icon-style">
            <RiInstagramFill size={32} />
            <a className="main-page-links" href="https://www.instagram.com/lune_dev/">Instagram</a>
          </div>
          <div className="icon-style">
            <RiWhatsappFill size={32} />
            <Link className="main-page-links nav-buttons" to="/contact">
                Contato
            </Link>
          </div>
          <div className="icon-style">
            <BsGlobe2 size={28} />
            <Link className="main-page-links nav-buttons" to="/">
              Site
            </Link>
          </div>
          </div>
      </main>
    </div>
    )
  }
}

export default MainPage;
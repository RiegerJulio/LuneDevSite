import React from 'react';
import Insta from '../components/Insta';
import WelcomeSection from '../components/WelcomeSection';
import SocialIcons from '../components/SocialIcons';
import lunelogo from '../images/logo_lune.png';
import Button from '../components/Button';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import YoutubeVideo from '../components/YoutubeVideo';

class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <WelcomeSection />
        <div className="home-logo">
          <img src={lunelogo} alt="logo da Lune" />
        </div>
        <div className="carrousel-div">
          <Title title="Nosso Trabalho" />

          <Carousel />

          <Button linkButton="http://localhost:3000/projects" typeButton="button" infoButton="Veja Mais" />
        </div>
        <YoutubeVideo />
        <Insta />
        <SocialIcons />
        </div>
    )
  }
}

export default Main;

// TODO:   component section home
//        não sei fazer
//        component instagram > h1 > insta da lune
//        componnent com botõ

// TODO: Componente 1 - WelcomeSection
// TODO: uma div com bg que contém:
// TODO: um Title <h1>
// TODO: uma section
// TODO: um button "About Us"

// TODO: Componente 2 - LogoHome
// TODO: Uma img, logo

// TODO: Componente 3 - CarroselSection
// TODO: Div do carrosel - bg é uma img
// TODO: Com um h1
// TODO: e o carrossel
// TODO: uma div com um botão more

// TODO: Componente 4 - MoreSection
// TODO: uma div que contém
// TODO: um h3? h2?
// TODO: um h1? h2?
// TODO: um botão more

// TODO: Componente 5 - Workflow
// TODO: um h2 "our Workflow"
// TODO: um mistério

// TODO: Componente 6 - InstagramSection
// TODO: um h1
// TODO: div com o instagram

// TODO: Componente 7 - SocialMediaHome
// TODO: uma div que contém
// TODO: 3 botõeos importados do react-icons
// TODO: um pro instagram, facebook, linkedin

import React, { Component } from 'react'
// import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Button from './Button';

const paragraphContent = `Bem vindos à Lune Dev. Aqui nós damos a seu site a cara que você preferir! Tudo isso de forma descontraída e super profissional.`;

export default class WelcomeSection extends Component {
	render() {
		return (
			<div className='welcome'>
			<Paragraph className="main-paragraph" paragraphContent={paragraphContent} />
			<Button infoButton="Sobre Nós" linkButton="http://localhost:3000/about-us"/>
			</div>
		)
	}
}


// TODO: Componente 1 - WelcomeSection
// TODO: uma div com bg que contém:
// TODO: um Title <h1> 
// TODO: uma section
// TODO: um button "About Us"


//<img src={bgimage} className='welcome-image' alt='Welcome' /> 
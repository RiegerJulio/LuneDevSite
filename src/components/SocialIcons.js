import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa';

export default class SocialIcons extends Component {
	render() {
		return (
			<div className='social-icons'>
				<a href='https://www.instagram.com/lune_dev/' rel="noreferrer" target={'_blank'}>
						<FaIcons.FaInstagramSquare className='icons' />
				</a>
				<a href='https://www.facebook.com/Lune-Dev-101657722392241/' rel="noreferrer" target={'_blank'}>
						<FaIcons.FaFacebook className='icons' />
				</a>
				<a href='https://www.linkedin.com/company/lune-dev/' rel="noreferrer" target={'_blank'}>
						<FaIcons.FaLinkedin className='icons' />
				</a>
			</div>
		)
	}
}

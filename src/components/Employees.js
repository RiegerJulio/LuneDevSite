import React, { Component } from 'react'
// import * as FaIcons from 'react-icons/fa';
import iconLinkedin from '../images/Site/icon_linkedin_purple.png'


export default class Employees extends Component {
	render() {
		const { sourceImage, altText, employeeName, employeeDescription, className, linkedin, employeeSide } = this.props;
		return (
			<div className={ className }>
				<div className="photo-logo">
					<img src={sourceImage} alt={ altText } className="employee-img"/>
					<a href={ linkedin } target="_blank" rel="noreferrer" ><img src={iconLinkedin} alt="linkedin icon" className="linkedin-icon"/></a>
				</div>
				<div className={ employeeSide }>
				<h3>{ employeeName }</h3>
				<p>{ employeeDescription }</p>
				</div>
			</div>
		)
	}
}

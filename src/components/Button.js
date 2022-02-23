import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		const { linkButton, infoButton, typeButton } = this.props;
		return (
			<div>
        <a href={linkButton}>
    			<button type={typeButton}>{infoButton}</button>
				</a>
			</div>
		)
	}
}

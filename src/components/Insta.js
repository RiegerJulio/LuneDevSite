import React, { Component } from 'react'
import "@ptkdev/webcomponent-instagram-widget";
import Title from './Title';

export default class Insta extends Component {

	
	
	render() {

		function instaRender () {
		const array = [];
		for(let index = 0; index <= 4; index += 1){
		 array.push(<img src={`https://profilepageimages.usecue.com/images/lune_dev/small/${index}.jpg`} alt={`Imagem ${index}`} className="instapost"/>)
		}
		return array
	}

		return (
			<div className='instagram-div'>
				<Title title="Instagram" />
				<a id="instafeed" href="https://www.instagram.com/lune_dev">
				{instaRender()}
</a> 
			</div>
			
			
		)
	}
}

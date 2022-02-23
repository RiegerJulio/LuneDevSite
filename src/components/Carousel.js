import React from 'react'	 
import Car0 from '../images/Carrossel/car0.png';
import Car1 from '../images/Carrossel/car1.png';
import Car2 from '../images/Carrossel/car2.png';
import Car3 from '../images/Carrossel/car3.png';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: Car0,	
    thumbnail: Car0,
  },
  {
    original: Car1,
    thumbnail: Car1,
  },
	{
    original: Car2,
    thumbnail: Car2,
  },
  {
    original: Car3,
    thumbnail: Car3,
  },
];

export default class Carousel extends React.Component {
  render() {
    return <ImageGallery 
		additionalClass='carousel' 
		items={images}
    showFullscreenButton={false}
		showNav={false}
		showThumbnails={false}
		showPlayButton={false}
		autoPlay={true}
    
		/>;
  }
}
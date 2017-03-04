import React, { Component } from 'react';
import './App.css';
import  Carousel from 'nuka-carousel';

class Slideshow extends Component {
	 render () {
		return (
			<Carousel className="carousel">
        <img src="http://www.appointmentgroup.com/wp-content/uploads/2016/12/Paris-Notre-Dame.jpg" role="presentation"/>
        <img src="http://bastilledayny.org/wp-content/uploads/2016/06/prizedrawing_tablet.jpg" role="presentation"/>
        <img src="http://www.availdeal.com/wp-content/uploads/2015/04/31.jpg" role="presentation"/>
        <img src="http://caughtinpixels.com/wp-content/uploads/2016/01/France-Bad-Weather-in-Paris.jpg" role="presentation"/>
      </Carousel>
		);
	}
}

export default Slideshow;

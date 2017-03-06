import React, { Component } from 'react';
import gift from './gift.svg';
import './App.css';
import Slideshow from './slideshow';
import Button from './Button';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  showComponent: false,
	  showButton: true
	};
	this._onFirstButtonClick = this._onFirstButtonClick.bind(this);
	this._openTrivagoTab = this._openTrivagoTab.bind(this);
  }

  _onFirstButtonClick() {
	this.setState({
	  showComponent: true,
	  showButton: false
	});
	this.forceUpdate();
  }

  _openTrivagoTab() {
  	window.open('https://www.trivago.co.uk/?iPathId=36103&bDispMoreFilter=false&aDateRange%5Barr%5D=2017-06-15&aDateRange%5Bdep%5D=2017-06-18&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&iRoomType=7&sOrderBy=relevance%20desc&aSortingOrderBoosting%5B%5D=distance&aPartner=&aOverallLiking=1%2C2%2C3%2C4%2C5&iGeoDistanceLimit=2348&iOffset=0&iLimit=25&iIncludeAll=0&bTopDealsOnly=false&iViewType=0&aPriceRange%5Bto%5D=11568&aPriceRange%5Bfrom%5D=3828&aGeoCode%5Blng%5D=2.352231&aGeoCode%5Blat%5D=48.856445&bIsSeoPage=false&aHotelTestClassifier=&bSharedRooms=false&bIsSitemap=false&rp=&cpt=3610303&iFilterTab=0&', '_blank');
  }

  render() {
	return (
		<div className="App">
			<div className="App-header">
				<img src={gift} className="App-logo" alt="logo" />
				<h2>This is Your Suprise!</h2>
			</div>
			<div>
				{ this.state.showButton ? <Button onClick={ this._onFirstButtonClick }>Button</Button> : null }
				{ this.state.showComponent ? <Slideshow /> : null }
				{ this.state.showComponent ? <Button onClick={ this._openTrivagoTab } /> : null }
			</div>
			<div className="copyright">Icons made by <a href="http://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	  </div>
	);
  }
}

export default App;

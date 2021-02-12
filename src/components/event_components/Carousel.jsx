import React from 'react';
import carousel from '../../icons/carousel.png';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
import carouselDot from '../../icons/carouselDot.svg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const MyCarousel = (props) => {
	return (
		<div className="myCarousel">
			<Carousel
				renderArrowNext={(onClickHandler, hasnext, label) => {
					if (hasnext) {
						return <button className="myNext" type="button" onClick={onClickHandler} title={label}>
							<img src={rightArrow} className="eventcarousel__nexticon" alt="right arrow" />
						</button>;
					}
				}}

				renderArrowPrev={(onClickHandler, hasprev, label) => {
					if (hasprev) {
						return <button className="myPrev" type="button" onClick={onClickHandler} title={label}>
							<img src={leftArrow} className="eventcarousel__nexticon" alt="right arrow" />
						</button>;
					}
				}}
			>
				<div className="pic">
					<img src={props.imgURL} alt="Not" />
				</div>
				<div className="pic">
					<img src={props.imgURL} alt="Not" />
				</div>
				<div className="pic" >
					<img src={props.imgURL} alt="Not" />
				</div>
				<div className="pic">
					<img src={props.imgURL} alt="Not" />
				</div>
			</Carousel>
		</div>
		// <>
		// 	<div id="carouselExampleControls" className="carousel slide eventcarousel" data-ride="carousel">
		// 		<div className="carousel-inner">
		// 			<Carousel >
		// 				<div className="carousel-item active eventcarousel__imgdiv">
		// 					<img src={props.imgURL} className="eventcarousel__img" alt="..." />
		// 				</div>
		// 				<div className="carousel-item eventcarousel__imgdiv">
		// 					<img src={carousel} className="d-block w-100 eventcarousel__img" alt="..." />
		// 				</div>
		// 				<div className="carousel-item eventcarousel__imgdiv">
		// 					<img src={carousel} className="d-block w-100 eventcarousel__img" alt="..." />
		// 				</div>
		// 			</Carousel>
		// 		</div>
		// 		<a className="carousel-control-prev eventcarousel__prevlink" href="#carouselExampleControls" role="button" data-slide="prev">
		// 			<img src={leftArrow} className="eventcarousel__previcon" alt="left arrow" />
		// 		</a>
		// 		<a className="carousel-control-next eventcarousel__nextlink" href="#carouselExampleControls" role="button" data-slide="next">
		// 			<img src={rightArrow} className="eventcarousel__nexticon" alt="right arrow" />
		// 		</a>
		// 	</div>

		// 	<div className="eventcarousel__rules">
		// 		<span className="eventcarousel__rules--rule">Strictly 18+ Event
		// 		   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot" />
		// 		</span>
		// 		<span className="eventcarousel__rules--rule">No Drinking Allowed
		// 		   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot" />
		// 		</span>
		// 		<span className="eventcarousel__rules--rule">No Smoking
		// 		   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot" />
		// 		</span>
		// 		<span className="eventcarousel__rules--rule">Outside Food Prohabitted
		// 		   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot" />
		// 		</span>
		// 	</div>
		// </>
	)
}

export default MyCarousel;
import React from 'react';
import carousel from '../../icons/carousel.png';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
import carouselDot from '../../icons/carouselDot.svg';

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide eventcarousel" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active eventcarousel__imgdiv">
                        <img src={carousel} className="eventcarousel__img" alt="..." />
                    </div>
                    <div className="carousel-item eventcarousel__imgdiv">
                        <img src="..." className="d-block w-100 eventcarousel__img" alt="..." />
                    </div>
                    <div className="carousel-item eventcarousel__imgdiv">
                        <img src="..." className="d-block w-100 eventcarousel__img" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev eventcarousel__prevlink" href="#carouselExampleControls" role="button" data-slide="prev">
                <img src={leftArrow} className="eventcarousel__previcon" alt="left arrow"/>
                </a>
                <a className="carousel-control-next eventcarousel__nextlink" href="#carouselExampleControls" role="button" data-slide="next">
                    <img src={rightArrow} className="eventcarousel__nexticon" alt="right arrow"/>
                </a>
            </div>

            <div className="eventcarousel__rules">
                <span className="eventcarousel__rules--rule">Strictly 18+ Event
                   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot"/>
                </span>
                <span className="eventcarousel__rules--rule">No Drinking Allowed
                   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot"/>
                </span>
                <span className="eventcarousel__rules--rule">No Smoking
                   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot"/>
                 </span>
                <span className="eventcarousel__rules--rule">Outside Food Prohabitted
                   <img className="eventcarousel__rules--dot" src={carouselDot} alt="dot"/>
                </span>
            </div>
        </>
    )
}

export default Carousel;
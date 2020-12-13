import React from 'react';
import image2 from '../../icons/hostIntro/image2.svg'


const WhySection = () =>{
    return (
        <div className="why">
            <div className="why__left">
                <img src={image2} alt="image" className="why__left--img"/>
            </div>
            <div className="why__right">
                <h2 className="why__right--heading">Why Choose H!tch ?</h2>
                <p className="why__right--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget et arcu duis a mi enim, senectus eu. Egestas ipsum vitae tortor, porttitor a vitae. Aenean pellentesque dui arcu nam ultrices augue posuere. Enim, sit pellentesque mauris, egestas amet, laoreet. Pretium mi mi lorem.
                </p>
                <button className="why__right--btn">Learn More</button>
            </div>
        </div>
    )
}

export default WhySection;
import React from 'react';
import image1 from '../../icons/hostIntro/image1.svg'
import yellowDotIcon from '../../icons/profile/yellowDotIcon.svg';

const WelcomeSection = ()=>{
    return(
        <div className="welcome">
            <div className="welcome__left">
                <h2 className="welcome__left--head1">Welcome to </h2>
                <h2 className="welcome__left--head2">H!tch<img src={yellowDotIcon} alt="icon" className="welcome__left--icon"/> HOST mode</h2>

                <p className="welcome__left--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis. </p>
                <button className="welcome__left--btn">HOST</button>
            </div>
            <div className="welcome__right">
                <img src={image1} alt="image" className="welcome__right--img"/>
            </div>
        </div>
    )
}

export default WelcomeSection;
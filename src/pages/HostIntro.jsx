import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HowSection from '../components/hostintro_components/HowSection';
import PacksSection from '../components/hostintro_components/PacksSection';
import WelcomeSection from '../components/hostintro_components/WelcomeSection';
import WhySection from '../components/hostintro_components/WhySection';


const HostIntro = ()=>{
    return(
        <>
        
        <div className="hostintro">
        <Navbar />
            <section className="hostintro__welcome">
                <WelcomeSection />
            </section>
            <section className="hostintro__why">
                <WhySection />
            </section>
            <section className="hostintro__how">
                <HowSection />
            </section>
            <section className="hostintro__packs">
                <PacksSection />
            </section>
            <Footer />
        </div>
        
        </>
    )
}

export default HostIntro;
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import About from '../components/profile_components/About'
import EventAttended from '../components/profile_components/EventAttended'
import HeaderSection from '../components/profile_components/HeaderSection'
import Hero from '../components/profile_components/Hero'
import HostedEvents from '../components/profile_components/HostedEvents'
import ProfileCard from '../components/profile_components/ProfileCard'
import {ConnectionButton, FollowButton} from '../components/profile_components/Buttons'

const Profile = ()=>{
    return (
        <>
        <Navbar />
        <section className="profilepage">

       
        <div className="profile_top">
        
        <Hero />
        <HeaderSection />
        </div>
        <div className="profile">

            <div className="profile__left">
                <div className="profile__left--profilecard">
                    <ProfileCard />
                </div>
                <div className="profile__left--connectionbtn">
                    <ConnectionButton />
                </div>
                <div className="profile__left--followbtn">
                    <FollowButton />
                </div>
            </div>
            <div className="profile__right">
                <div className="profile__right--about">
                    <About/>
                </div>
                <div className="profile__right--hostedevents">
                    <HostedEvents />
                </div>
                <div className="profile__right--eventsattended">
                    <EventAttended />
                </div>
            </div>

        </div>
        <div className="profile__footer">
            <Footer />
        </div>
        </section>
        </>
    )
}

export default Profile;
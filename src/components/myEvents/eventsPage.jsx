import React from 'react';
import Upper from './Upper';
import Filter from './Filter';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import EventCard from '../event_components/EventCard';
import EventDetails from '../event_components/EventDetails';
import SimilarEventCard from '../event_components/SimilarEventCard';

const mainComponent = () => {
    return (
        <div className="eventsPage">
            <Navbar />
            <Upper />
            <div className="eventsPage__content">
                <div className="eventsPage__content--filter">
                    <Filter />
                </div>
                <section className="eventsPage__content--events">
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                    <SimilarEventCard />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default mainComponent;
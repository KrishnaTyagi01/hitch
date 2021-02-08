import React, { useEffect, useState } from 'react';
import Upper from './Upper';
import Filter from './Filter';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import MyEventCard from './MyEventCard';
// import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const MainComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getAllEvents = async () => {
            let res = await axios.get(`http://167.71.237.202/events/`);
            res = res.data;
            setEvents(res);
        }
        getAllEvents();
    }, [])

    const MyEvents = events.map(event => {
        return <MyEventCard title={event.title} desc={event.description} img={event.image} date={event.scheduled_date} />
    })



    return (
        <div className="eventsPage">
            <Navbar />
            <Upper />
            <div className="eventsPage__content">
                <div className="eventsPage__content--filter">
                    <Filter />
                </div>
                <section className="eventsPage__content--events">
                    {MyEvents}
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default MainComponent;
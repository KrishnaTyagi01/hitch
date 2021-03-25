import React, { useEffect, useState, useRef } from 'react';
import Upper from '../myEvents/Upper';
import Filter from '../myEvents/Filter';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import MyEventCard from '../myEvents/MyEventCard';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
// import { connect } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchPageNavbar from './SearchPageNavbar';
import EventCard from '../Common/EventCard';


const SearchPage = (props) => {
    const [events, setEvents] = useState([]);
    const [topics, setTopics] = useState('');

    const refactorEvents = (currEvents) => {
        let tempEvents = [...currEvents];
        if (tempEvents.length > 0 && tempEvents[0].image[0] === '/') {
            for (let i = 0; i < tempEvents.length; ++i) {
                tempEvents[i].image = "http://167.71.237.202" + tempEvents[i].image;
                tempEvents[i].url = "http://167.71.237.202" + tempEvents[i].url;
            }
        }
        return tempEvents;
    }

    const io = useRef(null);
    const cardContainer = useRef(null);

    const lazyLoadBackgroundImage = (target) => {
        if (cardContainer.current) {
            io.current = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('background-loaded');
                        console.log('background loaded with IntersectionObserver');
                        observer.disconnect();
                    }
                });
            });
            io.current.observe(target);
        }
    };

    useEffect(() => {
        if (events) {
            const cards = cardContainer?.current.childNodes;
            cards?.forEach(lazyLoadBackgroundImage);
        }
    }, [events]);

    useEffect(() => {
        setTopics(props.location.state.topics);
    }, []);

    useEffect(() => {
        const getAllEvents = async () => {
            try {
                let form_data = new FormData();
                form_data.append('topics', topics);
                // console.log(topics);

                let url = 'http://167.71.237.202/events/search/';

                const res = await axios({
                    method: 'POST',
                    url: url,
                    headers: {
                        Authorization: `Token ${props.token}`,
                    },
                    data: form_data,
                })
                setEvents(refactorEvents(res.data));
            }
            catch (error) {
                console.error();
            }
        }
        getAllEvents();
    }, [topics]);

    const AAA = events.map((event) => (
        <EventCard event={event} lazyLoadBI={true} key={event.id} />
    ));

    const getTopics = (search) => {
        if (search.length !== 0) {
            let ans = "[" + "\"" + search + "\"]";
            return ans;
        }
        else {
            return "[]"
        }
    }

    const onFilterChange = (events) => {
        setEvents(refactorEvents(events));
    }

    const changeSearchTerm = (searchKeyword) => {
        setTopics(getTopics(searchKeyword));
    }

    return (
        <div className="searchPage">
            <SearchPageNavbar changeSearchTerm={changeSearchTerm} />
            <div className="search_header">
                <div className="heading">
                    Search Results
                </div>
            </div>
            <div className="searchPage__content">
                <div className="searchPage__content--filter">
                    <Filter onFilterChange={onFilterChange} topics={props.location.state.topics} />
                </div>
                <section className="searchPage__content--events">
                    <div className="eventsGrid" ref={cardContainer}>
                        {AAA}
                    </div>
                </section>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.authState.token,
    }
}

export default connect(mapStateToProps)(SearchPage);
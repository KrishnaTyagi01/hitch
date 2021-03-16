import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setTopics(props.location.state.topics);
    }, []);

    useEffect(() => {
        const getAllEvents = async () => {
            let form_data = new FormData();
            form_data.append('topics', topics);

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
        getAllEvents();
    }, [topics]);

    // const MyEvents = events.map(event => {
    //     return (
    //         <Link to={{
    //             pathname: "/event-details",
    //             state: { event: event }
    //         }}
    //         >
    //             <MyEventCard title={event.title} desc={event.description} img={event.image} date={event.scheduled_date} />
    //         </Link>
    //     )
    // })

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
                    <div className="eventsGrid">
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
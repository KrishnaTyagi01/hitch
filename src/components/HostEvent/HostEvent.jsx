import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sections from './Sections';
import Button1 from './Button1';

const HostEvent = () => {
    return (
        <div className="hostEvent">
            <Navbar />
            <div className="header">
                <span>Host Your Event</span>
            </div>
            <div className="maincontainer">
                <div className="sections">
                    <Sections />
                </div>
                <form className="sec_container">

                    {/* ======================= EVENT NAME =============================================  */}
                    {/* ======================= EVENT NAME =============================================  */}
                    <div className="event_name">
                        <input type="text" placeholder="Name of event" />
                        <span><Button1 /></span>
                    </div>
                    <div className="event_tagline">
                        <textarea placeholder="Tagline for the event" />
                        <span><Button1 /></span>
                    </div>

                    {/* ======================= EVENT OVERVIEW =============================================  */}
                    {/* ======================= EVENT OVERVIEW =============================================  */}
                    <div className="event_overview">
                        <textarea placeholder="Overview of the event" />
                        <span><Button1 /></span>
                    </div>

                    {/* ======================= EVENT PICTURES =============================================  */}
                    {/* ======================= EVENT PICTURES =============================================  */}
                    <div className="event_pictures">
                        <div className="event_pictures_header">
                            <span>Pictures</span>
                            <span id="event_pictures_header_right">Minimum 1 Required</span>
                        </div>
                        <div className="event_pictures_picture_box">
                            <div className="event_pictures_picture_box_circle">
                                <div>+</div>
                            </div>
                        </div>
                        <div className="event_pictures_all_pictures">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    {/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
                    {/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
                    <div className="event_hosts">
                        <div className="event_hosts_header">
                            Host and Speakers
                        </div>
                        <div className="event_hosts_cards">
                            <div className="event_hosts_card"></div>
                            <div className="event_hosts_addCard" >
                                <div className="event_hosts_addCard_circle">
                                    <div>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ======================= EVENT SCHEDULE  =============================================  */}
                    {/* ======================= EVENT SCHEDULE =============================================  */}
                    <div className="event_schedule">
                        <div className="event_schedule_header">
                            Schedule and Timeline
                        </div>
                        <div className="event_schedule_date">
                            <div className="event_schedule_date_header">
                                Date
                            </div>
                            <div></div>
                        </div>
                        <div className="event_schedule_time">

                        </div>
                    </div>
                    {/* ======================= EVENT SCHEDULE  =============================================  */}
                    {/* ======================= EVENT SCHEDULE =============================================  */}
                    <div className="event_timeline">
                        <div className="event_timeline_header"></div>
                        <div className="event_timeline_table">

                        </div>
                        <div className="event_timeline_buttons">

                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default HostEvent;

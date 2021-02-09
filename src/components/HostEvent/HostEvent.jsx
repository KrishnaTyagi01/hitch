import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sections from './Sections';
import Button1 from './Button1';

const HostEvent = () => {
    const [imgurl, setImgurl] = useState('');

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
                        {/* <div>
                            <img src={imgurl} alt="NOT AVAILABLE" />
                        </div> */}
                        <div className="event_pictures_picture_box">
                            <div className="event_pictures_picture_box_circle">
                                <div>+</div>
                            </div>
                            {/* <input
                                value={imgurl}
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={(e) => }
                            />
                            <button>Done</button> */}
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
                            <div className="event_schedule_date_blanks">
                                <div>
                                    <input className="day" placeholder="D"></input>
                                    <input className="day" placeholder="D"></input>

                                    <input className="month" placeholder="M"></input>
                                    <input className="month" placeholder="M"></input>

                                    <input className="year" placeholder="Y"></input>
                                    <input className="year" placeholder="Y"></input>
                                    <input className="year" placeholder="Y"></input>
                                    <input className="year" placeholder="Y"></input>
                                </div>
                                <div className="button">
                                    <Button1 />
                                </div>

                            </div>
                        </div>
                        <div className="event_schedule_time">
                            <div className="event_schedule_time_header">
                                Start Time
                            </div>
                            <div className="event_schedule_time_blanks">
                                <div>
                                    <input className="day" placeholder="H"></input>
                                    <input className="day" placeholder="H"></input>

                                    <input className="month" placeholder="M"></input>
                                    <input className="month" placeholder="M"></input>
                                </div>
                                <div className="button">
                                    <Button1 />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ======================= EVENT SCHEDULE  ============================================= 
                    {/* ======================= EVENT SCHEDULE =============================================  */}
                    {/* <div className="event_timeline">
                        <div className="event_timeline_header"></div>
                        <div className="event_timeline_table">

                        </div>
                        <div className="event_timeline_buttons">

                        </div>
                    </div>  */}

                    {/* ============================= EVENT PRICE PLAN =========================  */}
                    {/* ============================= EVENT PRICE PLAN =========================  */}
                    <div className="event_pricePlan">
                        <div className="event_pricePlan_header">
                            Current Price Plan
                        </div>
                        <div className="change_plan">
                            <Button1 />
                        </div>
                        <div className="plan">

                        </div>
                    </div>

                    {/* ============================= EVENT TAGS =========================  */}
                    {/* ============================= EVENT TAGS =========================  */}
                    <div className="event_tags">
                        <div className="event_tags_header">
                            Tags
                        </div>
                        <textarea />
                        <span><Button1 /></span>
                    </div>
                    {/* ============================= EVENT ADDITIONAL INFO =========================  */}
                    {/* ============================= EVENT ADDITIONAL INFO =========================  */}
                    <textarea placeholder="Additional information" />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default HostEvent;

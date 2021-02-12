import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sections from './Sections';
import Button1 from './Button1';
import axios from 'axios';

const HostEvent = () => {
    // const [selectedFile, setSelectedFile] = useState();
    // const [preview, setPreview] = useState();



    // // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined);
    //         return;
    //     }

    //     const objectUrl = URL.createObjectURL(selectedFile);
    //     setPreview(objectUrl);

    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl);
    // }, [selectedFile]);

    // const onSelectFile = e => {
    //     if (!e.target.files || e.target.files.length === 0) {
    //         setSelectedFile(undefined);
    //         return;
    //     }

    //     // I've kept this example simple by using the first image instead of multiple
    //     setSelectedFile(e.target.files[0]);
    // }

    const [Title, setTitle] = useState('');
    const [Tagline, setTagline] = useState('');
    const [Overview, setOverview] = useState('');

    const [DateD1, setDateD1] = useState('');
    const [DateD2, setDateD2] = useState('');
    const [DateM1, setDateM1] = useState('');
    const [DateM2, setDateM2] = useState('');
    const [DateY1, setDateY1] = useState('');
    const [DateY2, setDateY2] = useState('');
    const [DateY3, setDateY3] = useState('');
    const [DateY4, setDateY4] = useState('');

    const [TimeH1, setTimeH1] = useState('');
    const [TimeH2, setTimeH2] = useState('');
    const [TimeM1, setTimeM1] = useState('');
    const [TimeM2, setTimeM2] = useState('');

    const postEvent = () => {

    }


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
                    <section id="basics"></section>
                    <div className="event_name">
                        <input value={Title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Name of event" />
                        <span><Button1 /></span>
                    </div>
                    <div className="event_tagline">
                        <textarea value={Tagline} onChange={e => setTagline(e.target.value)} placeholder="Tagline for the event" />
                        <span><Button1 /></span>
                    </div>

                    {/* ======================= EVENT OVERVIEW =============================================  */}
                    {/* ======================= EVENT OVERVIEW =============================================  */}
                    <div className="event_overview">
                        <textarea value={Overview} onChange={e => setOverview(e.target.value)} placeholder="Overview of the event" />
                        <span><Button1 /></span>
                    </div>

                    {/* ======================= EVENT PICTURES =============================================  */}
                    {/* ======================= EVENT PICTURES =============================================  */}
                    <section id="pictures"></section>
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
                        {/* <div className="event_pictures_chooseFile">
                            <input type='file' onChange={onSelectFile} />
                            {selectedFile && <img src={preview} />}
                        </div> */}
                        <div className="event_pictures_all_pictures">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    {/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
                    {/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
                    <section id="host"></section>
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
                    <section id="schedule"></section>
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
                                    <input value={DateD1} onChange={(e) => setDateD1(e.target.value)} className="day" placeholder="D"></input>
                                    <input value={DateD2} onChange={(e) => setDateD2(e.target.value)} className="day" placeholder="D"></input>

                                    <input value={DateM1} onChange={(e) => setDateM1(e.target.value)} className="month" placeholder="M"></input>
                                    <input value={DateM2} onChange={(e) => setDateM2(e.target.value)} className="month" placeholder="M"></input>

                                    <input value={DateY1} onChange={(e) => setDateY1(e.target.value)} className="year" placeholder="Y"></input>
                                    <input value={DateY2} onChange={(e) => setDateY2(e.target.value)} className="year" placeholder="Y"></input>
                                    <input value={DateY3} onChange={(e) => setDateY3(e.target.value)} className="year" placeholder="Y"></input>
                                    <input value={DateY4} onChange={(e) => setDateY4(e.target.value)} className="year" placeholder="Y"></input>
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
                                    <input value={TimeH1} onChange={(e) => setTimeH1(e.target.value)} className="day" placeholder="H"></input>
                                    <input value={TimeH2} onChange={(e) => setTimeH2(e.target.value)} className="day" placeholder="H"></input>

                                    <input value={TimeM1} onChange={(e) => setTimeM1(e.target.value)} className="month" placeholder="M"></input>
                                    <input value={TimeM2} onChange={(e) => setTimeM2(e.target.value)} className="month" placeholder="M"></input>
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
                    <section id="pricing"></section>
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
                    <section id="tags"></section>
                    <div className="event_tags">
                        <div className="event_tags_header">
                            Tags
                        </div>
                        <textarea />
                        <span><Button1 /></span>
                    </div>
                    {/* ============================= EVENT ADDITIONAL INFO =========================  */}
                    {/* ============================= EVENT ADDITIONAL INFO =========================  */}
                    <section id="additional"></section>
                    <div className="events_addInfo">
                        <textarea placeholder="Additional information" />
                        <span>Optional</span>
                        <span>
                            <Button1 />
                        </span>
                    </div>
                    {/* ============================= EVENT LOCATION =========================  */}
                    {/* ============================= EVENT LOCATION =========================  */}
                    {/* <div style={{ margin: '100px' }}>
                        <CustomMap />
                    </div> */}
                    {/* ============================= EVENT LOCATION =========================  */}
                    {/* ============================= EVENT LOCATION =========================  */}
                    <section id="view"></section>
                    <button className="ViewEvent" onClick={(e) => e.preventDefault()}>
                        View your event
                    </button>
                    <section id="post"></section>
                    <button className="PostEvent" onClick={(e) => e.preventDefault()}>
                        Post event
                    </button>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default HostEvent;

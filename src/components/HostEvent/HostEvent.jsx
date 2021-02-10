import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sections from './Sections';
import Button1 from './Button1';

const HostEvent = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0]);
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
                    <section id="pictures"></section>
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
                        <div className="event_pictures_chooseFile">
                            <input type='file' onChange={onSelectFile} />
                            {selectedFile && <img src={preview} />}
                        </div>
                        {/* <div className="event_pictures_chooseFile">
                            <input type="file" onChange={readurl} />
                            <Button1 />
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
                    <section id="hosts"></section>
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

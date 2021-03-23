import { useState, useEffect } from 'react';
// import axios from 'axios';

import BannerCarousel from '../EventPage/BannerCarousel';
import Tags from '../EventPage/Tags';
import HostDetails from '../EventPage/HostDetails';
import Overview from '../EventPage/Overview';
import EventDetails from '../EventPage/EventDetails';
// import MessageBoard from '../EventPage/MessageBoard';
import OrganizersMessage from '../EventPage/OrganizersMessage';
// import SimilarEvents from '../EventPage/SimilarEvents';
// import Timeline from '../EventPage/Timeline';
// import MapSection from '../EventPage/Maps';
import EventActions from '../EventPage/EventActions';
import SmallEventActions from '../EventPage/SmallEventActions';
import Loading from '../Common/Loading';
import PreviewEventActions from './PreviewEventActions';
import PreviewSmallEventActions from './PreviewSmallEventActions';
import { Carousel } from 'react-responsive-carousel';
// import Page404 from './Page404';

// import errorHandler from '../API/errorHandler';

const PreviewEvent = (props) => {
    if (props.show === false)
        return null;

    const images = () => {
        var arr = [];
        if (props.event && props.event.image) arr.push(props.event.image);
        if (props.event && props.event.image1) arr.push(props.event.image1);
        if (props.event && props.event.image2) arr.push(props.event.image2);
        return arr;
    }

    return (
        <div className="previewModal">
            <div className='eventPage'>
                <button className='back-button' onClick={() => props.setViewEvent(false)}>
                    <i className='fa fa-chevron-left'></i>
                    Close Preview
                </button>
                <article>
                    <main>
                        <BannerCarousel images={images()} />
                        <PreviewSmallEventActions event={props.event} />
                        <Tags tags={props.event?.tags} />
                        <Overview description={props.event?.description} />
                        {/* <HostDetails /> */}
                        <EventDetails event={props.event} />
                        {/* <Timeline timeline={event?.timeline} /> */}
                        {/* <MessageBoard messages={event?.messages} /> */}
                        <OrganizersMessage organizersMessage={props.event?.organizersMessage} />
                    </main>
                    <aside>
                        <PreviewEventActions event={props.event} />
                    </aside>
                </article>
                {/* <SimilarEvents eventID={eventID} /> */}
            </div>
        </div>
    );
};

export default PreviewEvent;

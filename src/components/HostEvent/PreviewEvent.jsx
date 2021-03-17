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
// import Page404 from './Page404';

// import errorHandler from '../API/errorHandler';

const PreviewEvent = (props) => {
    if (props.show === false)
        return null;

    // const { eventID } = props.match.params;
    // const [event, setEvent] = useState(null);
    // const [httpStatusCode, setHttpStatusCode] = useState();

    // const getEvent = async () => {
    //     try {
    //         const res = await axios.get(`/events/${eventID}/`);
    //         setEvent(res.data);
    //     } catch (error) {
    //         setHttpStatusCode(error.response.status);
    //         // errorHandler(error);
    //     }
    // };

    // useEffect(() => {
    //     if (props.location.state?.event) setEvent(props.location.state.event);
    //     else getEvent();
    // }, [eventID, props]);

    // if (httpStatusCode === 404) {
    //     return <Page404 />;
    // }

    console.log('hello');


    return (
        <div className="previewModal">
            <div className='eventPage'>
                <button className='back-button' onClick={() => props.setViewEvent(false)}>
                    <i className='fa fa-chevron-left'></i>
                    Close Preview
                </button>
                <article>
                    <main>

                        <BannerCarousel images={[props.event?.image]} />
                        <SmallEventActions event={props.event} />
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

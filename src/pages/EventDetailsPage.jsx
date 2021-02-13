import react from 'react';
import { Link, withRouter } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import EventCard from '../components/event_components/EventCard';
import MyCarousel from '../components/event_components/Carousel';
import Tags from '../components/event_components/Tags';
import Speakers from '../components/event_components/Speakers';
import Overview from '../components/event_components/Overview';
import EventDetails from '../components/event_components/EventDetails';
import MessageBoard from '../components/event_components/MessageBoard';
import OrganizersMessage from '../components/event_components/OrganizersMessage';
//  import MapSection from '../components/event_components/Maps';
import SimilarEventCard from '../components/event_components/SimilarEventCard';
import SimilarEventSection from '../components/event_components/SimilarEventSection';
import Timeline from '../components/event_components/Timeline';
import { AddToCalenderBtn, BookmarkBtn } from '../components/event_components/Buttons';
import { useEffect } from 'react/cjs/react.development';

const EventDetailsPage = (props) => {
	useEffect(() => {
		console.log(props.location.state.event);
	}, []);

	return (
		<>
			<div className="eventDetailsPage">
				<Navbar />
				<div className="eventDetailsPage__inner">
					<section className="eventDetailsPage__hero">
						<div className="eventDetailsPage__hero--left">
							<MyCarousel imgURL={props.location.state.event.image} />
						</div>
						<div className="eventDetailsPage__hero--right">
							<EventCard event={props.location.state.event} />
							<AddToCalenderBtn />
							<BookmarkBtn />
						</div>
					</section>
					<section className="eventDetailsPage__tags">
						<Tags tags={props.location.state.event.tags} />
					</section>
					<section className="eventDetailsPage__overview">
						<Overview description={props.location.state.event.description} />
					</section>
					<section className="eventDetailsPage__speakers">
						<Speakers />
					</section>
					<section className="eventDetailsPage__eventdetails">
						<EventDetails event={props.location.state.event} />
					</section>
					<section className="eventDetailsPage__timeline">
						<Timeline />
					</section>
					<section className="eventDetailsPage__messageboard">
						<MessageBoard />
					</section>
					<section className="eventDetailsPage__organizersmessage">
						<OrganizersMessage />
					</section>

				</div>
				<section className="eventDetailsPage__similarevents">
					<SimilarEventSection />
				</section>
				<Footer />
			</div>

		</>
	);
};

export default EventDetailsPage;

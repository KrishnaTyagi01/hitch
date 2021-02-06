import EventCard from '../components/event_components/EventCard';
import Carousel from '../components/event_components/Carousel';
import Tags from '../components/event_components/Tags';
import Speakers from '../components/event_components/Speakers';
import Overview from '../components/event_components/Overview';
import EventDetails from '../components/event_components/EventDetails';
import MessageBoard from '../components/event_components/MessageBoard';
import OrganizersMessage from '../components/event_components/OrganizersMessage';
//  import MapSection from '../components/event_components/Maps';
import SimilarEventSection from '../components/event_components/SimilarEventSection';
import Timeline from '../components/event_components/Timeline';
import { AddToCalenderBtn, BookmarkBtn } from '../components/event_components/Buttons';

const EventDetailsPage = () => {
	return (
		<div className="eventDetailsPage">
			<div className="eventDetailsPage__inner">
				<section className="eventDetailsPage__hero">
					<div className="eventDetailsPage__hero--left">
						<Carousel />
					</div>
					<div className="eventDetailsPage__hero--right">
						<EventCard />
						<AddToCalenderBtn />
						<BookmarkBtn />
					</div>
					
				</section>
				<section className="eventDetailsPage__tags">
					<Tags />
				</section>
				<section className="eventDetailsPage__overview">
					<Overview />
				</section>
				<section className="eventDetailsPage__speakers">
					<Speakers/>
				</section>
				<section className="eventDetailsPage__eventdetails">
					<EventDetails />
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
		</div>
	)
}

export default EventDetailsPage;  
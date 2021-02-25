import Carousel from 'react-elastic-carousel';
import EventCard from '../Common/EventCard';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];

const HostedEventCarousel = () => {
	return (
		<Carousel pagination={false} breakPoints={breakpoints}>
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
		</Carousel>
	);
};

export default HostedEventCarousel;

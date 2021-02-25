import React from 'react';
import SimilarEventCard from './SimilarEventCard';
import Carousel from 'react-elastic-carousel';
import eventpic2 from '../../icons/eventPicSvg.svg'

import MyEventCard from '../myEvents/MyEventCard';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];


const SimilarEventSection = () => {
	return (
		<div className="similareventsection">
			<h2 className="similareventsection__heading">SIMILAR EVENTS</h2>
			<Carousel pagination={false} breakPoints={breakpoints}>
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
				<MyEventCard img={eventpic2} title="Hello" desc="Description of the event" date="2021-02-08" />
			</Carousel>
		</div>
	)
}

export default SimilarEventSection;
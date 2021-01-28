import React from 'react';
import SimilarEventCard  from './SimilarEventCard';
import Carousel from 'react-elastic-carousel';

const breakpoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2},
	{width: 750, itemsToShow: 3},
	{width: 1000, itemsToShow: 4}
];


const SimilarEventSection = () =>{
	return(
		<div className="similareventsection">
			<h2 className="similareventsection__heading">SIMILAR EVENTS</h2>
			<Carousel pagination={false} breakPoints={breakpoints}>
				<SimilarEventCard />
				<SimilarEventCard />
				<SimilarEventCard />
				<SimilarEventCard />
				<SimilarEventCard /> 
				<SimilarEventCard />
				<SimilarEventCard />
				<SimilarEventCard />
				<SimilarEventCard />
			</Carousel>
		</div>
	)
}

export default SimilarEventSection;
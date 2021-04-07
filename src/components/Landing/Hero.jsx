import { useState, useEffect } from 'react';
import axios from 'axios';

import HighlightCard from './HighlightCard';
import Loading from '../Common/Loading';

export default function Hero() {
	const [index, setIndex] = useState(0);
	const [highlights, setHighlights] = useState(null);

	const loadPrevSlide = () => {
		if (index === 0) setIndex(highlights.length - 1);
		else setIndex(index - 1);
	};

	const loadNextSlide = () => {
		if (index === highlights.length - 1) setIndex(0);
		else setIndex(index + 1);
	};

	useEffect(() => {
		const getEvents = async () => {
			try {
				const res = await axios.get('/events/');
				const temp = res.data.slice(0, 5);
				setHighlights(temp);
			} catch (error) {
				console.error(error);
				// errorHandler(error);
			}
		};

		getEvents();
	}, []);
	// let { title, location, scheduled_date, image } = ;

	return (
		<div className='landing-hero'>
			{!highlights ? (
				<Loading />
			) : (
				<div
					className='highlight'
					style={{ backgroundImage: `url( ${highlights[index].image} )` }}
				>
					<div className='highlight-text'>
						<h1>{highlights[index].title}</h1>
					</div>
					<HighlightCard event={highlights[index]} />
					<button className='prev' onClick={loadPrevSlide}>
						&#10094;
					</button>
					<button className='next' onClick={loadNextSlide}>
						&#10095;
					</button>
				</div>
			)}
		</div>
	);
}

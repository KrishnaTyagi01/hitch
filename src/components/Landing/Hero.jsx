import { useState } from 'react'
import ShowInfoCard from './ShowInfoCard'
import banners from './banners.json'

export default function Hero() {

	const [index, setIndex] = useState(0);

	const loadPrevSlide = () => {
		if(index===0) setIndex(banners.length-1)
		else setIndex(index-1)
	}

	const loadNextSlide = () => {
		if(index===banners.length-1) setIndex(0)
		else setIndex(index+1)
	}

	let { userName, eventName, location, date, picture } = banners[index];

	return (
		<div 
			className='landing-hero'
			style={{ backgroundImage: `url( ${picture} )` }}
		>
			<div className='title'>
				<h1>{userName}</h1>
				<h1>{eventName}</h1>
				<h1>{location}</h1>
			</div>
			<ShowInfoCard location={location} date={date} />
			<button className='prev' onClick={loadPrevSlide}>&#10094;</button>
			<button className='next' onClick={loadNextSlide}>&#10095;</button>
		</div>
	)
}
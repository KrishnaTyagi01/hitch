import { useState } from 'react';

export default function BannerCarousel(props) {
	const [index, setIndex] = useState(0);
	const n = props.images.length;
	// console.log(n);

	// const loadPrevSlide = () => {
	// 	if (index === 0) setIndex(props.images.length - 1);
	// 	else setIndex(index - 1);
	// };

	// const loadNextSlide = () => {
	// 	if (index === props.images.length - 1) setIndex(0);
	// 	else setIndex(index + 1);
	// };

	// onClick={loadPrevSlide}
	// onClick={loadNextSlide}

	// const fixedImageURL = props.images[index]?.startsWith('http')
	// 	? props.images[index]
	// 	: `http://${process.env.REACT_APP_BACKENDAPI}/${props.images[index]}`;

	const nextIT = () => {
		var newIdx = (index + 1);
		if (newIdx >= n) return;
		setIndex(newIdx);
	}

	const prevIT = () => {
		var newIdx = (index - 1);
		if (newIdx < 0) return;
		setIndex(newIdx);
	}

	// console.log(index);
	return (
		<div
			className='banner-carousel'
			style={{ backgroundImage: `url( ${props.images[index]} )`, transition: 'ease-in', transitionDuration: '4000' }}
		>
			<button className='prev' type="button" onClick={prevIT}>&#10094;</button>
			<button className='next' onClick={nextIT}>&#10095;</button>
		</div >
	);
}

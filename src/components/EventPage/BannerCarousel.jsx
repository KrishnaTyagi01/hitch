import { useState } from 'react';

export default function BannerCarousel(props) {
	const [index, setIndex] = useState(0);

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

	return (
		<div
			className='banner-carousel'
			style={{ backgroundImage: `url( ${props.images[index]} )` }}
		>
			<button className='prev'>&#10094;</button>
			<button className='next'>&#10095;</button>
		</div>
	);
}

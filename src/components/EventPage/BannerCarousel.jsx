import { useState, useEffect } from 'react';

export default function BannerCarousel(props) {
	const [index, setIndex] = useState(0);
	const n = props.images.length;

	const nextImage = () => {
		var newIdx = index + 1;
		if (newIdx >= n) return;
		setIndex(newIdx);
	};

	const prevImage = () => {
		var newIdx = index - 1;
		if (newIdx < 0) return;
		setIndex(newIdx);
	};

	useEffect(() => {
		setIndex(0);
	}, [props]);

	return (
		<div
			className='banner-carousel'
			// style={{ backgroundImage: `url( ${props.images[index]} )` }}
		>
			<img src={props.images[index]} alt='event banner' className='banner' />
			<button
				className='prev'
				type='button'
				onClick={prevImage}
				style={{
					display: `${index === 0 ? 'none' : 'inline-block'}`
				}}
			>
				&#10094;
			</button>
			<button
				className='next'
				onClick={nextImage}
				style={{
					display: `${index === n - 1 ? 'none' : 'inline-block'}`
				}}
			>
				&#10095;
			</button>
		</div>
	);
}

import { useState } from 'react';

export default function BannerCarousel(props) {
	const [index, setIndex] = useState(0);
	const n = props.images.length;

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
			style={{ backgroundImage: `url( ${props.images[index]} )` }}
		>
			<button className='prev' type="button" onClick={prevIT}
				style={{
					display: `${index === 0 ? 'none' : 'inline-block'}`
				}}
			>&#10094;</button>
			<button className='next' onClick={nextIT}
				style={{
					display: `${index === n - 1 ? 'none' : 'inline-block'}`
				}}>&#10095;</button>
		</div >
	);
}

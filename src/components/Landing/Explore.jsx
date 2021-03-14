import Carousel from 'react-elastic-carousel';
import categories from './categories.json';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 750, itemsToShow: 2 },
	{ width: 1000, itemsToShow: 3 }
];

export default function Explore() {
	return (
		<div className='explore'>
			<h2 className='section-name'>Explore</h2>
			<div className='categories-container'>
				<div className='categories'>
					<Carousel pagination={false} breakPoints={breakpoints}>
						{categories.map((category, index) => (
							<div
								key={index}
								className='category'
								style={{ backgroundImage: `url( ${category.picture} )` }}
							>
								<p>{category.name}</p>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
}

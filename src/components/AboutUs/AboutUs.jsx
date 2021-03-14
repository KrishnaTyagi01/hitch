import React from 'react';
import person1 from '../../icons/about Hitch/person1.png';
import person2 from '../../icons/about Hitch/person2.png';
import Card1 from './AboutUsCard1';
import person3 from '../../icons/hostIntro/image2.svg';
import TeamCard from './TeamCard';

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<div className='AboutUs__welcome'>
				<div className='AboutUs__welcome--heading'>Welcome to H!TCH</div>
				<div className='AboutUs__welcome--body'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti a, velit
					qui consequatur itaque. Necessitatibus sint totam culpa laboriosam, voluptates
					temporibus ab dolore? Nostrum voluptatum corporis obcaecati fugit alias!
				</div>
				<div className='AboutUs__welcome--person1'>
					<img src={person1} />
				</div>
				<div className='AboutUs__welcome--person2'>
					<img src={person2} />
				</div>
			</div>
			<div className='AboutUs__whatWeDo'>
				<div className='AboutUs__whatWeDo--heading'>What Do We Do?</div>
				<div className='AboutUs__whatWeDo--cards'>
					<Card1 card='1' />
					<Card1 card='2' />
					<Card1 card='3' />
				</div>
			</div>
			<div className='AboutUs__whyChoose'>
				<div className='AboutUs__whyChoose__content'>
					<div className='AboutUs__whyChoose__header'>Why Choose H!tich ?</div>
					<div className='AboutUs__whyChoose__text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et animi incidunt
						necessitatibus, reprehenderit esse minus perspiciatis saepe fugiat voluptate
						iure ad? Quod perferendis, facere amet maxime nulla repellendus ad
						necessitatibus?
					</div>
				</div>
				<div className='AboutUs__whyChoose__image'>
					<img src={person3} />
				</div>
			</div>
			<div className='AboutUs__Team'>
				<div className='AboutUs__Team__heading'>Meet Our Team</div>
				<div className='AboutUs__Team__grid'>
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;


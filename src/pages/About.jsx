import { Helmet } from 'react-helmet';

import person1 from '../icons/About/person1.png';
import person2 from '../icons/About/person2.png';
import Card1 from '../components/About/AboutCard1';
import person3 from '../icons/hostIntro/image2.svg';
import TeamCard from '../components/About/TeamCard';

const About = () => {
	return (
		<div className='About'>
			<Helmet>
				<title>About Us | Mezami</title>
			</Helmet>
			<div className='About__welcome'>
				<div className='About__welcome--heading'>Welcome to H!TCH</div>
				<div className='About__welcome--body'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti a, velit
					qui consequatur itaque. Necessitatibus sint totam culpa laboriosam, voluptates
					temporibus ab dolore? Nostrum voluptatum corporis obcaecati fugit alias!
				</div>

				<div className='About__welcome--person1'>
					<img src={person1} alt='person' />
				</div>
				<div className='About__welcome--person2'>
					<img src={person2} alt='person' />
				</div>
			</div>
			<div className='About__whatWeDo'>
				<div className='About__whatWeDo--heading'>What Do We Do?</div>
				<div className='cardsContainer'>
					<div className='About__whatWeDo--cards'>
						<Card1 card='1' />
						<Card1 card='2' />
						<Card1 card='3' />
					</div>
				</div>
			</div>
			<div className='About__whyChoose'>
				<div className='About__whyChoose__content'>
					<div className='About__whyChoose__header'>Why Choose H!tich ?</div>
					<div className='About__whyChoose__text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et animi incidunt
						necessitatibus, reprehenderit esse minus perspiciatis saepe fugiat voluptate
						iure ad? Quod perferendis, facere amet maxime nulla repellendus ad
						necessitatibus?
					</div>
				</div>
				<div className='About__whyChoose__image'>
					<img src={person3} alt='person' />
				</div>
			</div>
			<div className='About__Team'>
				<div className='About__Team__heading'>Meet Our Team</div>
				<div className='About__Team__grid'>
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

export default About;

import Hero from '../components/Landing/Hero';
import Explore from '../components/Landing/Explore';
import Discover from '../components/Landing/Discover';
import RecommendedEvents from '../components/Landing/RecommendedEvents';
import { Helmet } from 'react-helmet';

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>Mezami</title>
			</Helmet>
			<Hero />
			<Explore />
			<Discover />
			<RecommendedEvents />
		</div>
	);
}

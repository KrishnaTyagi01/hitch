import Hero from '../components/Landing/Hero';
import Explore from '../components/Landing/Explore';
import Discover from '../components/Landing/Discover';
import RecommendedEvents from '../components/Landing/RecommendedEvents';

export default function Home() {
	return (
		<div>
			<Hero />
			<Explore />
			<Discover />
			<RecommendedEvents />
		</div>
	);

}

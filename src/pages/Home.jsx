import Hero from '../components/Landing/Hero';
import Explore from '../components/Landing/Explore';
import Discover from '../components/Landing/Discover';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function Home() {



	return (
		<div>
			<Navbar />
			<Hero />
			<Explore />
			<Discover />
			<Footer />
		</div>
	);
}

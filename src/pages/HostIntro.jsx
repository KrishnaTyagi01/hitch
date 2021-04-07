import HowSection from '../components/hostintro_components/HowSection';
import PacksSection from '../components/hostintro_components/PacksSection';
import WelcomeSection from '../components/hostintro_components/WelcomeSection';
import WhySection from '../components/hostintro_components/WhySection';
import { Helmet } from 'react-helmet';

const HostIntro = () => {
	return (
		<div className='hostintro'>
			<Helmet>
				<title>Host Intro | Mezami</title>
			</Helmet>
			<section className='hostintro__welcome'>
				<WelcomeSection />
			</section>
			<section className='hostintro__why'>
				<WhySection />
			</section>
			<section className='hostintro__how'>
				<HowSection />
			</section>
			<section className='hostintro__packs'>
				<PacksSection />
			</section>
		</div>
	);
};

export default HostIntro;

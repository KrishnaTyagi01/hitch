import HowSection from '../components/hostintro_components/HowSection';
import PacksSection from '../components/hostintro_components/PacksSection';
import WelcomeSection from '../components/hostintro_components/WelcomeSection';
import WhySection from '../components/hostintro_components/WhySection';

const HostIntro = () => {
	return (
		<div className="hostintro">
			<section className="hostintro__welcome">
				<WelcomeSection />
			</section>
			<section className="hostintro__why">
				<WhySection />
			</section>
			<section className="hostintro__how">
				<HowSection />
			</section>
			<section className="hostintro__packs">
				<PacksSection />
			</section>
		</div>
	)
}

export default HostIntro;
import Base from './Base'
import dotIcon from '../../icons/dashboard/dot.svg'
function PricingPlan() {
	return (
		<Base>
			<div className="pricingplan">
				<div className="pricingplan__upper">
					<div className="pricingplan__left">
						<span className="pricingplan__left--head">Ganpati Visarjan</span>
						<img src={dotIcon} alt="dot" />
						<span className="pricingplan__left--subhead">Current Price Plan</span>
					</div>
					<div className="pricingplan__right">
						<button className="pricingplan__right--timingbtn">UPCOMING  :  12th Nov 2020</button>
						<button className="pricingplan__right--changebtn">Change Plans</button>
					</div>
				</div>

				<div className="pricingplan__lower">
					<span className="pricingplan__lower--head">The H!tch   BASIC</span>
					<span className="pricingplan__lower--date">ACTIVE since 12th Oct 2020</span>
				</div>
			</div>
		</Base>
	)
}

export default PricingPlan
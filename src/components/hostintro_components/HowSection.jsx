import image3 from '../../icons/hostIntro/image3.svg'

const HowSection = () => {

	return (
		<div className="how">
			<div className="how__left">
				<h2 className="how__left--heading">How to create with H!tch</h2>
				<div className="how__left--points">

					<div className="how__left--point">
						<span className="how__left--count">1.</span>
						<p className="how__left--text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis.
						</p>
					</div>
					<div className="how__left--point">
						<span className="how__left--count">2.</span>
						<p className="how__left--text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis.
						</p>
					</div>

					<div className="how__left--point">
						<span className="how__left--count">3.</span>
						<p className="how__left--text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis.
						</p>
					</div>
					<div className="how__left--point">
						<span className="how__left--count">4.</span>
						<p className="how__left--text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis.
						</p>
					</div>

				</div>
			</div>
			<div className="how__right">
				<img src={image3} alt="image" className="how__right--img" />
			</div>
		</div>
	)
}

export default HowSection;
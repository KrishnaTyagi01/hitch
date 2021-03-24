const About = (props) => {
	return (
		<div className='about'>
			<h2 className='about__heading'>Hi, I'm {props.name}</h2>
			<p className='about__text'>{props.about && props.about}</p>
		</div>
	);
};

export default About;

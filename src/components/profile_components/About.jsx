import React from 'react';


const About = (props)=>{

	const {values} = props

	return(
		<div className="about">
			<h2 className="about__heading">Hi, I'm {values.name}</h2>
			<p className="about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dicta totam quidem dolore laborum numquam, labore eos fugiat eaque. Delectus, facilis veritatis. Reprehenderit voluptates exercitationem provident enim, eaque magnam debitis?</p>
		</div>
	)
}

export default About;
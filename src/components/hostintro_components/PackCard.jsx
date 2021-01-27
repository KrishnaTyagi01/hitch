import React from 'react';


const PackCard = (props)=>{
	return (
		<div className="packcard">
			<h3 className="packcard__head">{props.heading}</h3>

			<button className="packcard__btn">HOST</button>
		</div>
	)
}

export default PackCard;
import React from 'react';

const Overview = (props) => {

	return (
		<div className="overview">
			<h2 className="overview__header">
				OVERVIEW
			</h2>
			<p className="overview__content">
				{props.description}
			</p>
		</div>
	)
}

export default Overview;
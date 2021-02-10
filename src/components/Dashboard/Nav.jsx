import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="hostnav">
			<div className="navbar__logo" style={{ paddingLeft: "20px" }}>
				<span className="navbar__logo--text">H!tch</span>
			</div>
			<span className="hostnav__head">Host Dashboard</span>
			<Link to="/host-event">
				<span className="hostnav__right">
					<button className="navbar__host--btn">Host</button>
				</span>
			</Link>

		</div>
	)
}

export default Nav

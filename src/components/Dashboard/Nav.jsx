import React from 'react';

const Nav = () => {
	return (
		<div className="hostnav">
			<div className="navbar__logo" style={{paddingLeft:"20px"}}>
				<span className="navbar__logo--text">H!tch</span>
			</div>
			<span className="hostnav__head">Host Dashboard</span>
			<span className="hostnav__right">
				{/* <i class="far fa-user" className="hostnav__icon"/> */}
				<button className="navbar__host--btn">Host</button>
			</span>
		</div>
	)
}

export default Nav

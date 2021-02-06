import { Link, withRouter } from 'react-router-dom'
// const heartLogo =  require('../../icons/Bookmark.svg')

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<span className="navbar__logo--text">H!tch</span>
			</div>
			<div className="navbar__dropdown">
				<select className="navbar__dropdown--input">
					<option className="navbar__dropdown--option" value="1">Delhi</option>
					<option className="navbar__dropdown--option" value="2">Mumbai</option>
					<option className="navbar__dropdown--option" value="3">kolkata</option>
					<option className="navbar__dropdown--option" value="4">chandigarh</option>
				</select>
			</div>
			<div className="navbar__search">
				<input className="navbar__search--input" placeholder="Search" />
			</div>
			<div className="navbar__home">
				<button className="navbar__home--btn">Home</button>
			</div>
			<div className="navbar__about">
				<Link to='/about' className="navbar__about--link">About Hitch</Link>
			</div>
			<div className="navbar__heart">
				<Link to='/bookmarks'>
					<i className="far fa-heart navbar__heart--icon"></i>
				</Link>
			</div>
			<div className="navbar__profile">profile</div>
			<div className="navbar__host">
				<button className="navbar__host--btn">Host</button>
			</div>
		</nav>
	)
}

export default withRouter(Navbar);
import heartIcon from '../../icons/Heart.svg'
import calenderIcon from '../../icons/calender.svg'
import { Link } from 'react-router-dom'

const ShowInfoCard = ({ location, date }) => {
	return (
		<div className="showInfoCard">
		  <div className="showInfoCard__upper">
			  <div className="block">
				  <h2 className="head">{date.substring(0, 10)}</h2>
				  <h4 className="subhead">Date</h4>
			  </div>
			  <div className="block">
				  <h2 className="head">{location.toUpperCase()}</h2>
				  <h4 className="subhead">Location</h4>
			  </div>
			  <div className="block">
				  <h2 className="head">19:00</h2>
				  <h4 className="subhead">Time</h4>
			  </div>
		  </div>

		  <div className="showInfoCard__lower">
			  <div className="icons">
				  <img className="icon" alt="heart icon" src={heartIcon}/>
				  <img className="icon" alt="calender icon" src={calenderIcon}/>
			  </div>
			  <div className="line"></div>
			  <div >
					<Link className="know">KNOW MORE</Link>
			  </div>
		  </div>
		</div>
	)
}

export default ShowInfoCard

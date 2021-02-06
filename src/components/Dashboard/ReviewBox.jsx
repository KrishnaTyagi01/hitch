import StarIcon from '../../icons/dashboard/StarIcon.svg'

function ReviewBox(props) {

	//Use this as a component for all the boxes pass the values as props from carousel
	// send hasstar = true as props from carousel for last rating box
	return (
		<div className="reviewBox">
			<span className="reviewBox__head">Total Events Conducted</span>
			<span className="reviewBox__rating">5
				<img style={{
					display: props.hasstar ? "" : "none",  
					marginLeft:"13px"
				}} src={StarIcon} alt="star"/>
			</span>
		</div>
	)
}

export default ReviewBox

import calenderIcon from '../../icons/calender.svg';
import heartIcon from '../../icons/Heart.svg';

export const AddToCalenderBtn =()=>{
	return (
		<button className="addcalender">
			<img src={calenderIcon} alt="calender img" className="addcalender__icon"/>
			Add to Calender
		</button>

	)
}

export const BookmarkBtn =()=>{
	return (
		<button className="bookmarkbtn">
			<img src={heartIcon} alt="heart img" className="bookmarkbtn__icon"/>
			Bookmark Event
		</button>
	)
}
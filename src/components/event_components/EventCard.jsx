import React from 'react';


const EventCard = () => {
	return (
		<>
			<div className="eventcard">
				<div className="eventcard__wrapper">


					<span className="eventcard__category">Featured in Concerts</span>

					<div className="eventcard__eventname">
						<span className="eventcard__eventname--hostname">ColdPlay </span>
						<span className="eventcard__eventname--tourname">Viva La Viva Tour</span>
						<span className="eventcard__eventname--tourdate"> Mumbai-2021</span>
					</div>
					<div className="eventcard__datewrapper">
						 <span className="eventcard__date">DATE</span>
					<p className="eventcard__eventdate">18th SEPTEMBER 2020</p>
					</div>
				   
					<div className="eventcard__timewrapper">
						  <span className="eventcard__start">START TIME</span>
					<p className="eventcard__eventtime">07:00 PM IST</p>
					</div>
				  
					<div className="eventcard__lower">
						<div className="eventcard__lower--entrybox">
							<span className="eventcard__lower--entry">ENTRY</span>
							<span className="eventcard__lower--entrytype">FREE</span>
						</div>

						<div className="eventcard__lower--time">
							<span className="eventcard__lower--start"> EVENT STARTS IN</span>
							<span className="eventcard__lower--entrytime">01D: 08H: 30M: 25S</span>
						</div>
					</div>

					<button className="eventcard__button">Register for this event</button>
				</div>
			</div>
		</>
	)
}


export default EventCard;
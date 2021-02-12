import React from 'react';
import Moment from 'moment';

const EventCard = (props) => {
	return (
		<>
			<div className="eventcard">
				<div className="eventcard__wrapper">


					<span className="eventcard__category">Featured in Concerts</span>

					<div className="eventcard__eventname">
						<span className="eventcard__eventname--hostname">{props.event.title} </span>
						{/* <span className="eventcard__eventname--tourname">Viva La Viva Tour</span>
						<span className="eventcard__eventname--tourdate"> Mumbai-2021</span> */}
					</div>
					<div className="eventcard__datewrapper">
						<span className="eventcard__date">DATE</span>
						<p className="eventcard__eventdate">{Moment(props.event.scheduled_date).format('Do MMMM YYYY')}</p>
					</div>

					<div className="eventcard__timewrapper">
						<span className="eventcard__start">START TIME</span>
						<p className="eventcard__eventtime">{Moment(props.event.scheduled_time, ["hh:mm:ss"]).format("hh:mm A")}</p>
					</div>

					<div className="eventcard__lower">
						<div className="eventcard__lower--entrybox">
							<span className="eventcard__lower--entry">ENTRY</span>
							<span className="eventcard__lower--entrytype">{props.event.ticket_price === 0 ? 'FREE' : props.event.ticket_price}</span>
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
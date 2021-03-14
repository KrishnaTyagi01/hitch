const TicketCardOld = () => {
	return (
		<>
			<div className='eventcardold'>
				<div className='eventcardold__wrapper'>
					<span className='eventcardold__category'>Featured in Concerts</span>

					<div className='eventcardold__eventname'>
						<span className='eventcardold__eventname--hostname'>ColdPlay </span>
						<span className='eventcardold__eventname--tourname'>Viva La Viva Tour</span>
						<span className='eventcardold__eventname--tourdate'> Mumbai-2021</span>
					</div>
					<div className='eventcardold__datewrapper'>
						<span className='eventcardold__date'>DATE</span>
						<p className='eventcardold__eventdate'>18th SEPTEMBER 2020</p>
					</div>

					<div className='eventcardold__timewrapper'>
						<span className='eventcardold__start'>START TIME</span>
						<p className='eventcardold__eventtime'>07:00 PM IST</p>
					</div>

					<div className='eventcardold__lower'>
						<div className='eventcardold__lower--entrybox'>
							<span className='eventcardold__lower--entry'>ENTRY</span>
							<span className='eventcardold__lower--entrytype'>FREE</span>
						</div>

						<div className='eventcardold__lower--time'>
							<span className='eventcardold__lower--start'> EVENT STARTS IN</span>
							<span className='eventcardold__lower--entrytime'>01D: 08H: 30M: 25S</span>
						</div>
					</div>

					<button className='eventcardold__button'>Register for this event</button>
				</div>
			</div>
		</>
	);
};

export default TicketCardOld;

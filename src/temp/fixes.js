// ===============================================================================

// Fixes for absolute and relative path inconsistency

// Profile page image
const fixedImageURL = props.profile?.image.startsWith('http')
	? props.profile?.image
	: `http://${process.env.REACT_APP_BACKENDAPI}/${props.profile?.image}`;

// EventCard image
const fixedImageURL = image.startsWith('http')
	? image
	: `http://${process.env.REACT_APP_BACKENDAPI}/${image}`;

// Piyush's fix in search results page
const refactorEvents = (currEvents) => {
	let tempEvents = [...currEvents];
	if (tempEvents.length > 0 && tempEvents[0].image[0] === '/') {
		for (let i = 0; i < tempEvents.length; ++i) {
			tempEvents[i].image = 'http://167.71.237.202' + tempEvents[i].image;
			tempEvents[i].url = 'http://167.71.237.202' + tempEvents[i].url;
		}
	}
	return tempEvents;
};

// ===============================================================================

<div className='event-filters'>
	{filters.map((filter) => (
		<div key={filter.name} className='event-filter'>
			<select name={filter.name} onChange={updateFilter}>
				<option value='' defaultValue hidden>
					{filter.label}
				</option>
				{filter.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	))}
</div>;

// ===============================================================================

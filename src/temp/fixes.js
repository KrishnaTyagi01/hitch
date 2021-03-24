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

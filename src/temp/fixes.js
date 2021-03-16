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

// import { activateLoginPrompt } from '../../../redux/actions/userActions';
// import {connect} from 'react-redux';

const AddToCalendar = (myEvent, setAlreadyInCalendar) => {
	var gapi = window.gapi;
	const CLIENT_ID =
		'1001904143961-1irvhehco0vna3ft694nfu0hrmmn9iks.apps.googleusercontent.com';
	const API_KEY = 'AIzaSyD0JPXFGJPzh9OMDH2dTYW1caEyxnU4DsQ';
	var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
	var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	gapi.load('client:auth2', () => {
		console.log('loaded client');

		gapi.client.init({
			apiKey: API_KEY,
			clientId: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			scope: SCOPES,
			prompt: 'select_account'
		});

		gapi.client.load('calendar', 'v3', () => console.log('bam!'));

		let start = myEvent.scheduled_date + 'T' + myEvent.scheduled_time;

		gapi.auth2
			.getAuthInstance()
			.signIn()
			.then(() => {
				var event = {
					id: 'hitch' + myEvent.id + 'hitch',
					summary: myEvent.title,
					location: myEvent.address,
					description: myEvent.description,
					start: {
						dateTime: start,
						timeZone: 'Asia/Kolkata'
					},
					end: {
						dateTime: start,
						timeZone: 'Asia/Kolkata'
					},
					recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
					// 'attendees': [
					//     { 'email': 'lpage@example.com' },
					//     { 'email': 'sbrin@example.com' }
					// ],
					reminders: {
						useDefault: false,
						overrides: [
							{ method: 'email', minutes: 24 * 60 },
							{ method: 'popup', minutes: 10 }
						]
					}
				};

				var request = gapi.client.calendar.events.insert({
					calendarId: 'primary',
					resource: event
				});

				request.execute((event) => {
					console.log(event);
					if (event.code === 409) {
						setAlreadyInCalendar(true);
					} else window.open(event.htmlLink);
				});

				gapi.auth2
					.getAuthInstance()
					.signOut()
					.then(() => console.log('signed out'));
			});
	});
};

export default AddToCalendar;

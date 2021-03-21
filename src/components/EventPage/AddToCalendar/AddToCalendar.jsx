
const AddToCalendar = () => {
    var gapi = window.gapi;
    const CLIENT_ID = '1001904143961-uteplscmk6ukmb3n213qisrj0nbc1dsa.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyCUffIjbMqecp2j_udWoLEIwihq1GsAeAI';
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";


    gapi.load('client:auth2', () => {
        console.log('loaded client')

        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
            prompt: "select_account",
        })

        gapi.client.load('calendar', 'v3', () => console.log('bam!'));

        // console.log(gapi.auth2.getAuthInstance().isSignedIn.get());

        gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                console.log('hello');
                var event = {
                    'summary': 'Awesome Event!',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'Really great refreshments',
                    'start': {
                        'dateTime': '2021-06-28T09:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                        'dateTime': '2021-06-28T17:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                        { 'email': 'lpage@example.com' },
                        { 'email': 'sbrin@example.com' }
                    ],
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            { 'method': 'email', 'minutes': 24 * 60 },
                            { 'method': 'popup', 'minutes': 10 }
                        ]
                    }
                }

                var request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event,
                })

                request.execute(event => {
                    console.log(event);
                    window.open(event.htmlLink);
                });
                // gapi.auth2.getAuthInstance().disconnect();
                console.log(gapi.auth2.getAuthInstance().isSignedIn.get());

                gapi.auth2.getAuthInstance().signOut()
                    .then(() => console.log('signed out'));

            });
    });
}

export default AddToCalendar;
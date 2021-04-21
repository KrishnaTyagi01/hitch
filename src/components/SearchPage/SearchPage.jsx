import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Filter from '../MyEvents/Filter';

import SearchPageNavbar from './SearchPageNavbar';
import EventCardsContainer from '../Common/EventCardsContainer';

const SearchPage = (props) => {
	const [events, setEvents] = useState([]);
	const [topics, setTopics] = useState('');

	useEffect(() => {
		setTopics(props.location.state.topics);
	}, [props.location.state]);

	useEffect(() => {
		const getAllEvents = async () => {
			try {
				let form_data = new FormData();
				form_data.append('topics', topics);

				const res = await axios.post('https://mezami.xyz/events/search/', form_data);
				setEvents(res.data);
			} catch (error) {
				console.error();
			}
		};
		getAllEvents();
	}, [topics]);

	const getTopics = (search) => {
		// if (search.length !== 0) {
		// 	let ans = '[' + '"' + search + '"]';
		// 	return ans;
		// } else {
		// 	return '[]';
		// }
		return JSON.stringify([search]);
	};

	const onFilterChange = (events) => {
		setEvents(events);
	};

	const changeSearchTerm = (searchKeyword) => {
		setTopics(getTopics(searchKeyword));
	};

	return (
		<div className='searchPage'>
			<SearchPageNavbar changeSearchTerm={changeSearchTerm} />
			<div className='search_header'>
				<div className='heading'>Search Results</div>
			</div>
			<div className='searchPage__content'>
				<div className='searchPage__content--filter'>
					<Filter onFilterChange={onFilterChange} topics={props.location.state.topics} />
				</div>
				<section className='searchPage__content--events'>
					<EventCardsContainer events={events} />
				</section>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.authState.token
});

export default connect(mapStateToProps)(SearchPage);

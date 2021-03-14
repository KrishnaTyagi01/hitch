import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { connect } from 'react-redux';

const Filter = (props) => {
	const [category, setCategory] = useState(true);
	const [time, setTime] = useState(false);
	const [language, setLanguage] = useState(false);
	const [date, setDate] = useState(false);
	const [filterState, setFilterState] = useState({
		category: {
			'design': false,
			'soccer': false,
			'music': false,
		},
	});
	// const [events, setEvents] = useState([]);

	useEffect(() => {
		let query = '[';
		if (filterState.category['design']) query += "\"design\",";
		if (filterState.category['soccer']) query += "\"soccer\",";
		if (filterState.category['music']) query += "\"music\",";
		query = query.substr(0, query.length - 1);
		query += "]";
		if (query.length == 1) query = '[]';
		// console.log(query);
		const getEvents = async () => {
			console.log(`Token ${props.token}`);
			let res = await axios({
				method: 'POST',
				url: `http://167.71.237.202/events/search/`,
				headers: {
					Authorization: `Token ${props.token}`,
				},
				data: {
					"topics": query,
				}
			});
			for (let i = 0; i < res.data.length; ++i) {
				res.data[i].image = "http://167.71.237.202" + res.data[i].image;
			}
			props.onFilterChange(res.data);
		}
		getEvents();



	}, [filterState]);

	const changeFilter = (e, type) => {
		let newstate = { ...filterState };
		// console.log(newstate.category[type]);
		newstate.category[type] = !newstate.category[type];
		setFilterState(newstate);
		e.stopPropagation();
	}



	return (
		<div className="filter">
			<div className="filter__head">
				<span className="filter__head--main">Filter</span>
				<span className="filter__head--sub">Reset</span>
			</div>
			{/* // =============================================== // */}
			<div className="filter__type">
				<div className="filter__subtype">
					<div className="filter__subtype--name">Category</div>
					<i onClick={() => setCategory(!category)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

				{category ? (
					<div className="filter__checkbox">
						<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
							<label
								className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'design')} class="filter__checkbox--checkmark"></span>
							Design
							</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'soccer')} class="filter__checkbox--checkmark"></span>
							Football
							</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'music')} class="filter__checkbox--checkmark"></span>
							Music
							</label>
						</form>
					</div>) : null}

			</div>
			{/* // =============================================== // */}
			<div className="filter__type">
				<div className="filter__subtype">
					<div className="filter__subtype--name">Event Time</div>
					<i onClick={() => setTime(!time)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>
				{time ? (<div className="filter__checkbox">
					<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Morning
					</label>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Afternoon
					</label>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Evening
					</label>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Weekend
					</label>
					</form>
				</div>) : null}
			</div>
			{/* // =============================================== // */}
			{/* // =============================================== // */}
			<div className="filter__type">
				<div className="filter__subtype">
					<div className="filter__subtype--name">Languages offered</div>
					<i onClick={() => setLanguage(!language)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

				{language ? (<div className="filter__checkbox">
					<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Hindi
					</label>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						English
					</label>
						<label className="filter__form--span">
							<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
							<span class="filter__checkbox--checkmark"></span>
						Punjabi
					</label>
					</form>
				</div>) : null}
			</div>

			{/* // =============================================== // */}

			<div className="filter__calender">
				{/* <Calendar style={{ color: "#171429" }} /> */}
				<div className="filter__subtype">
					<div className="filter__subtype--name">Date</div>
					<i onClick={() => setDate(!date)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

				{date ? (<Calendar
					calendarClassName="responsive-calendar"
					calendarTodayClassName="todayClass-calendar"
					calendarSelectedDayClassName="selectedClass-calendar"
				/>) : null}
			</div>

		</div>
	)
}

const mapStateToProps = state => {
	return {
		token: state.authState.token,
	}
}

export default connect(mapStateToProps)(Filter);

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { connect } from 'react-redux';

const Filter = (props) => {
	const [category, setCategory] = useState(false);
	// const [time, setTime] = useState(false);
	// const [language, setLanguage] = useState(false);
	const [location, setLocation] = useState(false);
	const [date, setDate] = useState(false);
	const [temp_category, setTemp_Category] = useState('');
	const [temp_location, setTemp_Location] = useState('');

	const defaultFrom = {
		year: 2000,
		month: 1,
		day: 1,
	};
	const defaultTo = {
		year: 2000,
		month: 1,
		day: 1,
	};
	const defaultValue = {
		from: defaultFrom,
		to: defaultTo,
	};
	const [selectedDayRange, setSelectedDayRange] = useState(
		defaultValue
	);

	const [filterState, setFilterState] = useState({
		categories: {
			search: '',
			'design': false,
			'soccer': false,
			'music': false,
		},
		locations: {
			search: '',
			"Delhi": false,
			"Bangalore": false,
			"Ranchi": false,
			"Hyderabad": false,
			"Visakhapatnam": false,
			"Mumbai": false,
			"Indore": false,
			"Jaipur": false,
			"Ahmedabad": false,
			"Chennai": false,
			"Kanpur": false,
			"Lucknow": false,
			"Jabalpur": false,
			"Pune": false,
			"Surat": false,
			"Kolkata": false,
		}
	});

	const resetFilter = () => {
		setFilterState({
			categories: {
				search: '',
				'design': false,
				'soccer': false,
				'music': false,
			},
			locations: {
				search: '',
				"Delhi": false,
				"Bangalore": false,
				"Ranchi": false,
				"Hyderabad": false,
				"Visakhapatnam": false,
				"Mumbai": false,
				"Indore": false,
				"Jaipur": false,
				"Ahmedabad": false,
				"Chennai": false,
				"Kanpur": false,
				"Lucknow": false,
				"Jabalpur": false,
				"Pune": false,
				"Surat": false,
				"Kolkata": false,
			}
		});
		setSelectedDayRange(defaultValue);
	}

	const cities = [
		"Delhi",
		"Bangalore",
		"Ranchi",
		"Hyderabad",
		"Visakhapatnam",
		"Mumbai",
		"Indore",
		"Jaipur",
		"Ahmedabad",
		"Chennai",
		"Kanpur",
		"Lucknow",
		"Jabalpur",
		"Pune",
		"Surat",
		"Kolkata",
	]

	const cityFilters = cities.map(city => {
		return (
			<label
				className="filter__form--span">
				<input className="filter__checkbox--input" checked={filterState.locations[city]} type="checkbox" value="greenEggs" />
				<span onClick={e => changeFilter(e, 'locations', city)} class="filter__checkbox--checkmark"></span>
				{city}
			</label>
		)
	})




	const getFilterData = (type) => {
		let query = "[";
		if (type === 'categories') {
			if (filterState.categories['design']) query += "\"design\",";
			if (filterState.categories['soccer']) query += "\"soccer\",";
			if (filterState.categories['music']) query += "\"music\",";

			if (filterState.categories.search !== '') {
				query += "\"" + filterState.categories.search + "\",";
				if (query[query.length - 1] === ',')
					query.substr(0, query.length - 1);
			}

			query = query.substr(0, query.length - 1);
			query += "]";
			if (query.length === 1) query = '[]';
		}
		else if (type === 'locations') {
			for (let i = 0; i < cities.length; ++i) {
				if (filterState.locations[cities[i]]) query += ("\"" + cities[i] + "\",");
			}
			if (filterState.locations.search !== '') {
				query += "\"" + filterState.locations.search + "\",";
				if (query[query.length - 1] === ',')
					query.substr(0, query.length - 1);
			}
			query = query.substr(0, query.length - 1);
			query += "]";
			if (query.length === 1) query = '[]';
		}
		return query;
	}

	const getDate = (type) => {
		if (type === 'start') {
			if (selectedDayRange.from === null)
				return null;

			let ans = '';
			ans += selectedDayRange.from.year;
			ans += '-';
			ans += selectedDayRange.from.month;
			ans += '-';
			ans += selectedDayRange.from.day;
			return ans;
		}
		else {
			if (selectedDayRange.to === null)
				return null;

			let ans = '';
			ans += selectedDayRange.to.year;
			ans += '-';
			ans += selectedDayRange.to.month;
			ans += '-';
			ans += selectedDayRange.to.day;
			return ans;

		}
	}

	useEffect(() => {
		const getEvents = async () => {
			let form_data = new FormData();
			form_data.append('categories', getFilterData('categories'));
			form_data.append('locations', getFilterData('locations'));

			if (props.topics)
				form_data.append('topics', props.topics);

			const start_date = getDate('start');
			const end_date = getDate('end');

			if (start_date && end_date && selectedDayRange.from.year !== 2000) {
				form_data.append('start_date', getDate('start'));
				form_data.append('end_date', getDate('end'));
			}

			let url = 'http://167.71.237.202/events/search/';
			const res = await axios({
				url: url,
				method: 'POST',
				headers: {
					Authorization: `Token ${props.token}`,
					"Content-Type": "multipart/form-data",
				},
				data: form_data,
			})
			props.onFilterChange(res.data);

		}
		getEvents();

	}, [filterState, selectedDayRange]);

	const changeFilter = (e, type, item) => {
		let newstate = { ...filterState };
		newstate[type][item] = !newstate[type][item];
		setFilterState(newstate);
		e.stopPropagation();
	}

	const onChangeSearch = (e, type) => {
		let newstate = { ...filterState };
		filterState[type].search = e.target.value;
		setFilterState(newstate);
	}

	const responsiveFilter = () => {
		if (window.innerWidth <= 1050) {
			if (date) {
				return (
					<Calendar
						value={selectedDayRange}
						onChange={setSelectedDayRange}
						colorPrimary="#0fbcf9" // added this
						colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
						shouldHighlightWeekends
						calendarClassName="responsive-calendar"
						calendarTodayClassName="todayClass-calendar"
						calendarSelectedDayClassName="selectedClass-calendar"
					/>);
			}
			else if (category) {
				return (
					<div className="filter__checkbox">
						<div className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
							<form className="_search" onSubmit={(e) => {
								e.preventDefault();
								let newstate = { ...filterState };
								newstate.categories.search = temp_category;
								setFilterState(newstate);
								e.stopPropagation();
								// console.log('Hello');
							}}>
								<input type="text" value={temp_category} onChange={e => setTemp_Category(e.target.value)}></input>
								<button type="submit">Search</button>
							</form>
							<label
								className="filter__form--span">
								<input className="filter__checkbox--input" checked={filterState.categories.design} type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'categories', 'design')} class="filter__checkbox--checkmark"></span>
								Design
								</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" checked={filterState.categories.soccer} type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'categories', 'soccer')} class="filter__checkbox--checkmark"></span>
								Football
								</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" checked={filterState.categories.music} type="checkbox" value="greenEggs" />
								<span onClick={e => changeFilter(e, 'categories', 'music')} class="filter__checkbox--checkmark"></span>
								Music
								</label>
						</div>
					</div>);
			}
			else if (location) {
				return (
					<div className="filter__checkbox">
						<div className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
							<form className="_search" onSubmit={(e) => {
								e.preventDefault();
								let newstate = { ...filterState };
								newstate.locations.search = temp_location;
								setFilterState(newstate);
								e.stopPropagation();
								// console.log('Hello');
							}}>
								<input type="text" value={temp_location} onChange={e => setTemp_Location(e.target.value)} ></input>
								<button type="submit" >Search</button>
							</form>
							{cityFilters}
						</div>
					</div>
				);
			}
		}
	}


	return (
		<>
			<div className="filter">
				<div className="filter__head">
					<span className="filter__head--main">Filter</span>
					<span onClick={resetFilter} className="filter__head--sub">Reset</span>
				</div>
				{/* // =============================================== // */}
				<div className="filter__type">
					<div className="filter__subtype">
						<div className="filter__subtype--name">Category</div>
						<i onClick={() => {
							setCategory(!category);
							if (window.innerWidth <= 1050) {
								setLocation(false);
								setDate(false);
							}
						}}
							style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down "
						/>
						{/* <i onClick={() => setCategory(!category)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " /> */}
					</div>

					{category && window.innerWidth > 1050 ? (
						<div className="filter__checkbox">
							<div className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
								<form className="_search" onSubmit={(e) => {
									e.preventDefault();
									let newstate = { ...filterState };
									newstate.categories.search = temp_category;
									setFilterState(newstate);
									e.stopPropagation();
									// console.log('Hello');
								}}>
									<input type="text" value={temp_category} onChange={e => setTemp_Category(e.target.value)}></input>
									<button type="submit">Search</button>
								</form>
								<label
									className="filter__form--span">
									<input className="filter__checkbox--input" checked={filterState.categories.design} type="checkbox" value="greenEggs" />
									<span onClick={e => changeFilter(e, 'categories', 'design')} class="filter__checkbox--checkmark"></span>
								Design
								</label>
								<label className="filter__form--span">
									<input className="filter__checkbox--input" checked={filterState.categories.soccer} type="checkbox" value="greenEggs" />
									<span onClick={e => changeFilter(e, 'categories', 'soccer')} class="filter__checkbox--checkmark"></span>
								Football
								</label>
								<label className="filter__form--span">
									<input className="filter__checkbox--input" checked={filterState.categories.music} type="checkbox" value="greenEggs" />
									<span onClick={e => changeFilter(e, 'categories', 'music')} class="filter__checkbox--checkmark"></span>
								Music
								</label>
							</div>
						</div>) : null}

				</div>

				{/* ==============================LOCATIONS=========================== */}
				<div className="filter__type">
					<div className="filter__subtype">
						<div className="filter__subtype--name">Location</div>
						<i onClick={() => {
							setLocation(!location);
							if (window.innerWidth <= 1050) {
								setCategory(false);
								setDate(false);
							}
						}}
							style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down "
						/>
					</div>

					{location && window.innerWidth > 1050 ? (
						<div className="filter__checkbox">
							<div className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
								<form className="_search" onSubmit={(e) => {
									e.preventDefault();
									let newstate = { ...filterState };
									newstate.locations.search = temp_location;
									setFilterState(newstate);
									e.stopPropagation();
									// console.log('Hello');
								}}>
									<input type="text" value={temp_location} onChange={e => setTemp_Location(e.target.value)} ></input>
									<button type="submit" >Search</button>
								</form>
								{cityFilters}
							</div>
						</div>) : null}
				</div>



				{/* // =============================================== // */}
				{/* <div className="filter__type">
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
			</div> */}
				{/* // =============================================== // */}
				{/* // =============================================== // */}
				{/* <div className="filter__type">
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
			</div> */}

				{/* // =============================================== // */}

				<div className="filter__calender">
					{/* <Calendar style={{ color: "#171429" }} /> */}
					<div className="filter__subtype">
						<div className="filter__subtype--name">Date</div>
						<i onClick={() => {
							setDate(!date);
							if (window.innerWidth <= 1050) {
								setCategory(false);
								setLocation(false);
							}
						}}
							style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down "
						/>
						{/* <i onClick={() => setDate(!date)} style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " /> */}
					</div>
					<div className="datesToFrom">
						<div>{`From: ${getDate('start') === null || getDate('start').substr(0, 4) === '2000' ? '-' : getDate('start')}`}</div>
						<div>{`To: ${getDate('end') === null || getDate('start').substr(0, 4) === '2000' ? '-' : getDate('end')}`}</div>
					</div>

					{date && window.innerWidth > 1050 ? (
						<Calendar
							value={selectedDayRange}
							onChange={setSelectedDayRange}
							colorPrimary="#0fbcf9" // added this
							colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this
							shouldHighlightWeekends
							calendarClassName="responsive-calendar"
							calendarTodayClassName="todayClass-calendar"
							calendarSelectedDayClassName="selectedClass-calendar"
						/>) : null}
				</div>
			</div>
			{responsiveFilter()}
		</>
	)
}


const mapStateToProps = state => {
	return {
		token: state.authState.token,
	}
}


export default connect(mapStateToProps)(Filter);
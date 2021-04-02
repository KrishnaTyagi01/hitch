import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Calendar } from 'react-modern-calendar-datepicker';
import DatePicker from 'react-modern-calendar-datepicker';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import search from '../../icons/search.svg';

const Filter = (props) => {
	const [category, setCategory] = useState(false);
	const [location, setLocation] = useState(false);
	const [date, setDate] = useState(false);
	const [temp_category, setTemp_Category] = useState('');
	const [temp_location, setTemp_Location] = useState('');
	const [initialRender, setInitialRender] = useState(0);

	useEffect(() => {
		if (window.width <= 1050) {
			setCategory(false);
			setDate(false);
			setLocation(false);
		}
	}, []);

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '' + dd + '/' + yyyy;

	const defaultFrom = {
		year: 2000,
		month: 1,
		day: 1
	};
	const defaultTo = {
		year: 2000,
		month: 1,
		day: 1
	};
	const defaultValue = {
		from: defaultFrom,
		to: defaultTo
	};
	const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);

	const [filterState, setFilterState] = useState({
		categories: {
			search: '',
			design: false,
			soccer: false,
			music: false
		},
		locations: {
			search: '',
			Delhi: false,
			Bangalore: false,
			Ranchi: false,
			Hyderabad: false,
			Visakhapatnam: false,
			Mumbai: false,
			Indore: false,
			Jaipur: false,
			Ahmedabad: false,
			Chennai: false,
			Kanpur: false,
			Lucknow: false,
			Jabalpur: false,
			Pune: false,
			Surat: false,
			Kolkata: false
		}
	});

	const resetFilter = () => {
		setFilterState({
			categories: {
				search: '',
				design: false,
				soccer: false,
				music: false
			},
			locations: {
				search: '',
				Delhi: false,
				Bangalore: false,
				Ranchi: false,
				Hyderabad: false,
				Visakhapatnam: false,
				Mumbai: false,
				Indore: false,
				Jaipur: false,
				Ahmedabad: false,
				Chennai: false,
				Kanpur: false,
				Lucknow: false,
				Jabalpur: false,
				Pune: false,
				Surat: false,
				Kolkata: false
			}
		});
		setSelectedDayRange(defaultValue);
	};

	const cities = [
		'Delhi',
		'Bangalore',
		'Ranchi',
		'Hyderabad',
		'Visakhapatnam',
		'Mumbai',
		'Indore',
		'Jaipur',
		'Ahmedabad',
		'Chennai',
		'Kanpur',
		'Lucknow',
		'Jabalpur',
		'Pune',
		'Surat',
		'Kolkata'
	];

	const cityFilters = cities.map((city, idx) => {
		return (
			<label className='filter__form--span' key={idx}>
				<input
					className='filter__checkbox--input'
					checked={filterState.locations[city]}
					type='checkbox'
					readOnly
				/>
				<span
					onClick={(e) => changeFilter(e, 'locations', city)}
					className='filter__checkbox--checkmark'
				></span>
				{city}
			</label>
		);
	});

	const getFilterData = (type) => {
		let query = '[';
		if (type === 'categories') {
			if (filterState.categories['design']) query += '"design",';
			if (filterState.categories['soccer']) query += '"soccer",';
			if (filterState.categories['music']) query += '"music",';

			if (filterState.categories.search !== '') {
				query += '"' + filterState.categories.search + '",';
				if (query[query.length - 1] === ',') query.substr(0, query.length - 1);
			}

			query = query.substr(0, query.length - 1);
			query += ']';
			if (query.length === 1) query = '[]';
		} else if (type === 'locations') {
			for (let i = 0; i < cities.length; ++i) {
				if (filterState.locations[cities[i]]) query += '"' + cities[i] + '",';
			}
			if (filterState.locations.search !== '') {
				query += '"' + filterState.locations.search + '",';
				if (query[query.length - 1] === ',') query.substr(0, query.length - 1);
			}
			query = query.substr(0, query.length - 1);
			query += ']';
			if (query.length === 1) query = '[]';
		}
		return query;
	};

	const getDate = (type) => {
		if (type === 'start') {
			if (selectedDayRange.from === null) return null;

			let ans = '';
			ans += selectedDayRange.from.year;
			ans += '-';
			ans += selectedDayRange.from.month;
			ans += '-';
			ans += selectedDayRange.from.day;
			return ans;
		} else {
			if (selectedDayRange.to === null) return null;

			let ans = '';
			ans += selectedDayRange.to.year;
			ans += '-';
			ans += selectedDayRange.to.month;
			ans += '-';
			ans += selectedDayRange.to.day;
			return ans;
		}
	};

	useLayoutEffect(() => {
		const getEvents = async () => {
			if (initialRender === 0) {
				console.log('hello');
				setInitialRender(1);
				return null;
			}

			let form_data = new FormData();
			form_data.append('categories', getFilterData('categories'));
			form_data.append('locations', getFilterData('locations'));

			if (props.topics) form_data.append('topics', props.topics);

			const start_date = getDate('start');
			const end_date = getDate('end');

			if (start_date && end_date && selectedDayRange.from.year !== 2000) {
				form_data.append('start_date', getDate('start'));
				form_data.append('end_date', getDate('end'));
			}

			let url = 'https://mezami.xyz/events/search/';
			const res = await axios({
				url: url,
				method: 'POST',
				data: form_data
			});
			props.onFilterChange(res.data);
		};
		getEvents();
	}, [filterState, selectedDayRange]);

	const changeFilter = (e, type, item) => {
		let newstate = { ...filterState };
		newstate[type][item] = !newstate[type][item];
		setFilterState(newstate);
		e.stopPropagation();
	};

	const onChangeSearch = (e, type) => {
		let newstate = { ...filterState };
		filterState[type].search = e.target.value;
		setFilterState(newstate);
	};

	const responsiveFilter = () => {
		if (window.innerWidth <= 1050) {
			if (date) {
				return (
					<Calendar
						value={selectedDayRange}
						onChange={setSelectedDayRange}
						colorPrimary='#0fbcf9' // added this
						colorPrimaryLight='rgba(75, 207, 250, 0.4)' // and this
						shouldHighlightWeekends
						calendarClassName='responsive-calendar'
						calendarTodayClassName='todayClass-calendar'
						calendarSelectedDayClassName='selectedClass-calendar'
					/>
				);
			} else if (category) {
				return (
					<div className='filter__checkbox'>
						<div
							className='filter__form'
							style={{ display: 'flex', flexDirection: 'column' }}
						>
							<form
								className='_search'
								onSubmit={(e) => {
									e.preventDefault();
									let newstate = { ...filterState };
									newstate.categories.search = temp_category;
									setFilterState(newstate);
									e.stopPropagation();
									// console.log('Hello');
								}}
							>
								<input
									type='text'
									value={temp_category}
									onChange={(e) => setTemp_Category(e.target.value)}
								></input>
								<button type='submit'>
									{
										<div
											style={{
												width: '18px',
												height: '20px',
												backgroundImage: `url(${search})`
											}}
										/>
									}
								</button>
							</form>
							<label className='filter__form--span'>
								<input
									className='filter__checkbox--input'
									checked={filterState.categories.design}
									type='checkbox'
									readOnly
								/>
								<span
									onClick={(e) => changeFilter(e, 'categories', 'design')}
									className='filter__checkbox--checkmark'
								></span>
								Design
							</label>
							<label className='filter__form--span'>
								<input
									className='filter__checkbox--input'
									checked={filterState.categories.soccer}
									type='checkbox'
									readOnly
								/>
								<span
									onClick={(e) => changeFilter(e, 'categories', 'soccer')}
									className='filter__checkbox--checkmark'
								></span>
								Football
							</label>
							<label className='filter__form--span'>
								<input
									className='filter__checkbox--input'
									checked={filterState.categories.music}
									type='checkbox'
									readOnly
								/>
								<span
									onClick={(e) => changeFilter(e, 'categories', 'music')}
									className='filter__checkbox--checkmark'
								></span>
								Music
							</label>
						</div>
					</div>
				);
			} else if (location) {
				return (
					<div className='filter__checkbox'>
						<div
							className='filter__form'
							style={{ display: 'flex', flexDirection: 'column' }}
						>
							<form
								className='_search'
								onSubmit={(e) => {
									e.preventDefault();
									let newstate = { ...filterState };
									newstate.locations.search = temp_location;
									setFilterState(newstate);
									e.stopPropagation();
									// console.log('Hello');
								}}
							>
								<input
									type='text'
									value={temp_location}
									onChange={(e) => setTemp_Location(e.target.value)}
								></input>
								<button type='submit'>
									{
										<div
											style={{
												width: '18px',
												height: '20px',
												backgroundImage: `url(${search})`
											}}
										/>
									}
								</button>
							</form>
							{cityFilters}
						</div>
					</div>
				);
			}
		}
	};

	return (
		<>
			<div className='filter'>
				<div className='filter__head'>
					<span className='filter__head--main'>Filter</span>
					<span onClick={resetFilter} className='filter__head--sub'>
						Reset
					</span>
				</div>
				{/* // =============================================== // */}
				<div className='filter__type'>
					<div className={`filter__subtype ${!category ? 'makeHover' : ''}`}
						onClick={() => {
							setCategory(!category);
							if (window.innerWidth <= 870) {
								setLocation(false);
								setDate(false);
							}
						}}

					>
						<div className='filter__subtype--name'>Category</div>
						<i
							style={{ fontSize: '7.5px', color: '#ffffff' }}
							className='fas fa-chevron-down '
						/>
						{/* <i onClick={() => setCategory(!category)} style={{ fontSize: "7.5px", color: "#ffffff" }} className="fas fa-chevron-down " /> */}
					</div>

					{category && window.innerWidth > 1050 ? (
						<div className='filter__checkbox'>
							<div
								className='filter__form'
								style={{ display: 'flex', flexDirection: 'column' }}
							>
								<form
									className='_search'
									onSubmit={(e) => {
										e.preventDefault();
										let newstate = { ...filterState };
										newstate.categories.search = temp_category;
										setFilterState(newstate);
										e.stopPropagation();
										// console.log('Hello');
									}}
								>
									<input
										type='text'
										value={temp_category}
										onChange={(e) => setTemp_Category(e.target.value)}
									></input>
									<button type='submit'>
										{
											<div
												style={{
													width: '18px',
													height: '20px',
													backgroundImage: `url(${search})`
												}}
											/>
										}
									</button>
								</form>
								<label className='filter__form--span'>
									<input
										className='filter__checkbox--input'
										checked={filterState.categories.design}
										type='checkbox'
										readOnly
									/>
									<span
										onClick={(e) => changeFilter(e, 'categories', 'design')}
										class='filter__checkbox--checkmark'
									></span>
									Design
								</label>
								<label className='filter__form--span'>
									<input
										className='filter__checkbox--input'
										checked={filterState.categories.soccer}
										type='checkbox'
										readOnly
									/>
									<span
										onClick={(e) => changeFilter(e, 'categories', 'soccer')}
										className='filter__checkbox--checkmark'
									></span>
									Football
								</label>
								<label className='filter__form--span'>
									<input
										className='filter__checkbox--input'
										checked={filterState.categories.music}
										type='checkbox'
										readOnly
									/>
									<span
										onClick={(e) => changeFilter(e, 'categories', 'music')}
										className='filter__checkbox--checkmark'
									></span>
									Music
								</label>
							</div>
						</div>
					) : null}
				</div>

				{/* ==============================LOCATIONS=========================== */}
				<div className='filter__type'>
					<div className='filter__subtype'
						onClick={() => {
							setLocation(!location);
							if (window.innerWidth <= 1050) {
								setCategory(false);
								setDate(false);
							}
						}}>
						<div className='filter__subtype--name'>Location</div>
						<i

							style={{ fontSize: '7.5px', color: '#ffffff' }}
							class='fas fa-chevron-down '
						/>
					</div>

					{location && window.innerWidth > 1050 ? (
						<div className='filter__checkbox'>
							<div
								className='filter__form'
								style={{ display: 'flex', flexDirection: 'column' }}
							>
								<form
									className='_search'
									onSubmit={(e) => {
										e.preventDefault();
										let newstate = { ...filterState };
										newstate.locations.search = temp_location;
										setFilterState(newstate);
										e.stopPropagation();
										// console.log('Hello');
									}}
								>
									<input
										type='text'
										value={temp_location}
										onChange={(e) => setTemp_Location(e.target.value)}
									></input>
									<button type='submit'>
										{
											<div
												style={{
													width: '18px',
													height: '20px',
													backgroundImage: `url(${search})`
												}}
											/>
										}
									</button>
								</form>
								{cityFilters}
							</div>
						</div>
					) : null}
				</div>


				{/* // =============================================== // */}

				<div className='filter__calender'>
					{/* <Calendar style={{ color: "#171429" }} /> */}
					<div className='filter__subtype'
						onClick={() => {
							setDate(!date);
							if (window.innerWidth <= 1050) {
								setCategory(false);
								setLocation(false);
							}
						}}
					>
						<div className='filter__subtype--name'>Date</div>
						<i
							style={{ fontSize: '7.5px', color: '#ffffff' }}
							className='fas fa-chevron-down '
						/>
						{/* <i onClick={() => setDate(!date)} style={{ fontSize: "7.5px", color: "#ffffff" }} className="fas fa-chevron-down " /> */}
					</div>
					<div className='datesToFrom'>
						<div>{`From: ${getDate('start') === null || getDate('start').substr(0, 4) === '2000'
							? '-'
							: getDate('start')
							}`}</div>
						<div>{`To: ${getDate('end') === null || getDate('start').substr(0, 4) === '2000'
							? '-'
							: getDate('end')
							}`}</div>
					</div>

					{date && window.innerWidth > 1050 ? (
						<Calendar
							value={selectedDayRange}
							onChange={setSelectedDayRange}
							colorPrimary='#0fbcf9' // added this
							colorPrimaryLight='rgba(75, 207, 250, 0.4)' // and this
							shouldHighlightWeekends
							calendarClassName='responsive-calendar'
							calendarTodayClassName='todayClass-calendar'
							calendarSelectedDayClassName='selectedClass-calendar'
						/>
					) : null}
				</div>
			</div>
			{responsiveFilter()}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.authState.token
	};
};

export default connect(mapStateToProps)(Filter);

import React from 'react'
// import Calendar from 'react-calendar'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from 'react';

const Filter = () => {
	const [category, setCategory] = useState(false);
	const [time, setTime] = useState(false);
	const [language, setLanguage] = useState(false);
	const [date, setDate] = useState(false);

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
							<label className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span class="filter__checkbox--checkmark"></span>
							Design
						</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span class="filter__checkbox--checkmark"></span>
							Football
						</label>
							<label className="filter__form--span">
								<input className="filter__checkbox--input" type="checkbox" value="greenEggs" />
								<span class="filter__checkbox--checkmark"></span>
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

export default Filter;

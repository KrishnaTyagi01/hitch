import React from 'react'
// import Calendar from 'react-calendar'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";

function filter() {
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
					<i style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

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
				</div>
			</div>
			{/* // =============================================== // */}
			<div className="filter__type">
				<div className="filter__subtype">
					<div className="filter__subtype--name">Event Time</div>
					<i style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>
				<div className="filter__checkbox">
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
				</div>
			</div>
			{/* // =============================================== // */}
			{/* // =============================================== // */}
			<div className="filter__type">
				<div className="filter__subtype">
					<div className="filter__subtype--name">Languages offered</div>
					<i style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

				<div className="filter__checkbox">
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
				</div>
			</div>

			{/* // =============================================== // */}

			<div className="filter__calender">
				{/* <Calendar style={{color: "#171429"}}/> */}
				<div className="filter__subtype">
					<div className="filter__subtype--name">Date</div>
					<i style={{ fontSize: "7.5px", color: "#ffffff" }} class="fas fa-chevron-down " />
				</div>

				<Calendar
					calendarClassName="responsive-calendar"
					style={{
						backgroundColor: "#171429"
					}}
				/>
			</div>

		</div>
	)
}

export default filter

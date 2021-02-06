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
				<i style={{fontSize:"7.5px", color:"#ffffff"}} class="fas fa-chevron-down "/>
			</div>

			<div className="filter__checkbox">
			<form className="filter__form" style={{display:"flex", flexDirection:"column"}}>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Design
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Football
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Music
				</span>
			</form>
			</div>
		</div>
{/* // =============================================== // */}
		<div className="filter__type">
			<div className="filter__subtype">
				<div className="filter__subtype--name">Event Time</div>
				<i style={{fontSize:"7.5px", color:"#ffffff"}} class="fas fa-chevron-down "/>
			</div>
			<div className="filter__checkbox">
			<form className="filter__form" style={{display:"flex", flexDirection:"column"}}>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Morning
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Afternoon
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Evening
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Weekend
				</span>
			</form>
			</div>
		</div>
{/* // =============================================== // */}
{/* // =============================================== // */}
		<div className="filter__type">
			<div className="filter__subtype">
				<div className="filter__subtype--name">Languages offered</div>
				<i style={{fontSize:"7.5px", color:"#ffffff"}} class="fas fa-chevron-down "/>
			</div>

			<div className="filter__checkbox">
			<form className="filter__form" style={{display:"flex", flexDirection:"column"}}>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Hindi
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					English
				</span>
				<span className="filter__form--span">
					<input className="filter__checkbox--input" type = "checkbox" value = "greenEggs" />
					Punjabi
				</span>
			</form>
			</div>
		</div>

{/* // =============================================== // */}

		<div className="filter__calender">
			{/* <Calendar style={{color: "#171429"}}/> */}
			<div className="filter__subtype">
				<div className="filter__subtype--name">Date</div>
				<i style={{fontSize:"7.5px", color:"#ffffff"}} class="fas fa-chevron-down "/>
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

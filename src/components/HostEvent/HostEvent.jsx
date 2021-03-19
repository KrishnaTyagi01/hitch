import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Sections from './Sections';
import Button1 from './Button1';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UploadImage from './UploadImage';
// import { Checkbox } from 'semantic-ui-react';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";
import PreviewEvent from './PreviewEvent';



const HostEvent = (props) => {
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
	const imgRef = useRef(null);
	const addTagRef = useRef(null);

	const [Title, setTitle] = useState('');
	const [Tagline, setTagline] = useState('');
	const [Overview, setOverview] = useState('');

	// const [DateD1, setDateD1] = useState('');
	// const [DateD2, setDateD2] = useState('');
	// const [DateM1, setDateM1] = useState('');
	// const [DateM2, setDateM2] = useState('');
	// const [DateY1, setDateY1] = useState('');
	// const [DateY2, setDateY2] = useState('');
	// const [DateY3, setDateY3] = useState('');
	// const [DateY4, setDateY4] = useState('');

	const [TimeH1, setTimeH1] = useState('');
	const [TimeH2, setTimeH2] = useState('');
	const [TimeM1, setTimeM1] = useState('');
	const [TimeM2, setTimeM2] = useState('');

	const [DurationH1, setDurationH1] = useState('');
	const [DurationH2, setDurationH2] = useState('');
	const [DurationM1, setDurationM1] = useState('');
	const [DurationM2, setDurationM2] = useState('');

	const [Image, setImage] = useState(null);
	const [Tags, setTags] = useState([]);
	const [tagValue, setTagValue] = useState('');
	const [duration, setDuration] = useState('');
	const [price, setPrice] = useState('');
	const [address, setAddress] = useState({
		lineOne: '',
		lineTwo: '',
		city: '',
		state: '',
		pin: '',
	});

	const defaultValue = {
		year: 2021,
		month: 3,
		day: 13,
	};
	const [selectedDay, setSelectedDay] = useState(null);

	const [viewEvent, setViewEvent] = useState(false);
	const [eventPosted, setEventPosted] = useState(false);
	const [freeEvent, setFreeEvent] = useState(false);
	const [onlineEvent, setOnlineEvent] = useState(false);
	const [singleDay, setSingleDay] = useState(false);



	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			setTags(prevState => ([...prevState, e.target.value]));
			setTagValue('');
			e.stopPropagation();
		}
	}

	useEffect(() => {
		if (addTagRef && addTagRef.current) {
			addTagRef.current.addEventListener('keyup', handleEnter);
		}
		return (() => {
			if (addTagRef && addTagRef.current) addTagRef.current.removeEventListener('keyup', handleEnter);
		})
	}, [])

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}
		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return (() => {
			URL.revokeObjectURL(objectUrl);
		});
	}, [selectedFile]);

	// const getDate = () => {
	// 	return DateY1 + DateY2 + DateY3 + DateY4 + '-' + DateM1 + DateM2 + '-' + DateD1 + DateD2;
	// }
	const getDate = () => {
		if (selectedDay === null)
			return null;

		let ans = '';
		ans += selectedDay.year;
		ans += '-';
		ans += selectedDay.month;
		ans += '-';
		ans += selectedDay.day;
		return ans;
	}
	const getDuration = () => {
		if (!singleDay) return null;
		return DurationH1 + DurationH2 + ':' + DurationM1 + DurationM2;
	}

	const getTime = () => {
		return TimeH1 + TimeH2 + ':' + TimeM1 + TimeM2;
	}

	const getTags = () => {
		let ans = "["
		for (let i = 0; i < Tags.length; ++i) {
			ans += "\"";
			ans += Tags[i];
			ans += "\"";
			if (i !== Tags.length - 1) ans += ","
		}
		ans += "]";
		return ans;
	}

	const getAddress = () => {
		if (onlineEvent) return null;
		let ans = address.lineOne + ',' + address.lineTwo + ',' + address.city + ',' + address.state + ',' + address.pin;
		return ans;
	}

	const postEvent = async (e) => {
		e.preventDefault();

		let form_data = new FormData();
		form_data.append('image', Image);
		// console.log(Image)
		form_data.append('title', Title);
		form_data.append('duration_days', singleDay ? null : duration);
		form_data.append('description', Tagline);
		form_data.append('scheduled_time', getTime());
		form_data.append('scheduled_date', getDate());
		form_data.append('tags', getTags());
		form_data.append('ticket_price', freeEvent ? '0' : price);
		form_data.append('address', getAddress());
		form_data.append('duration', getDuration());
		form_data.append('is_online_event', onlineEvent);
		form_data.append('is_free_event', freeEvent);

		let url = 'http://167.71.237.202/events/';

		const res = await axios.post(url, form_data, {
			headers: {
				Authorization: `Token ${props.token}`,
			}
		})

		setEventPosted(true);
	}

	const viewTempEvent = (e) => {
		e.preventDefault();
		setViewEvent(true);
	}

	const allTags = () => {
		return (
			Tags.map(tagName => {
				return <input className="addTag" value={`#${tagName}`}></input>;
			})
		)
	}

	const onImageUpload = (img) => {
		console.log(img);
		setImage(img);
	}

	const onImageCropped = (preview) => {
		console.log(preview);
		setPreview(preview);
	}

	const tempEvent = {
		image: preview,
		title: Title,
		description: Tagline,
		scheduled_time: getTime(),
		scheduled_date: getDate(),
		tags: getTags(),
		ticket_price: price,
		duration: getDuration(),
	};

	useEffect(() => {
		if (freeEvent) {
			setPrice('0');
		}
		else {
			setPrice('');
		}
	}, [freeEvent])



	return (
		<>
			{viewEvent && <PreviewEvent show={viewEvent} setViewEvent={setViewEvent} event={tempEvent} />}
			<div className="hostEvent">
				<div className="header">
					<span>Host Your Event</span>
				</div>
				<div className="maincontainer">
					<div className="sections">
						<Sections />
					</div>
					<form className="sec_container">

						{/* ======================= EVENT NAME =============================================  */}
						{/* ======================= EVENT NAME =============================================  */}
						<section id="basics"></section>
						<div className="event_name">
							<input value={Title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Name of event" />
						</div>
						<div className="event_tagline">
							<textarea value={Tagline} onChange={e => setTagline(e.target.value)} placeholder="Tagline for the event" />

						</div>

						{/* ======================= EVENT OVERVIEW =============================================  */}
						{/* ======================= EVENT OVERVIEW =============================================  */}
						<div className="event_overview">
							<textarea value={Overview} onChange={e => setOverview(e.target.value)} placeholder="Overview of the event" />
						</div>

						{/* ======================= EVENT PICTURES =============================================  */}
						{/* ======================= EVENT PICTURES =============================================  */}
						<section id="pictures"></section>
						<div className="event_pictures">
							<UploadImage onImageUpload={onImageUpload} onImageCropped={onImageCropped} />
						</div>

						{/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
						{/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
						<section id="host"></section>
						<div className="event_hosts">
							<div className="event_hosts_header">
								Host and Speakers
                        </div>
							<div className="event_hosts_cards">
								<div className="event_hosts_card"></div>
							</div>
						</div>
						{/* ======================= EVENT SCHEDULE  =============================================  */}
						{/* ======================= EVENT SCHEDULE =============================================  */}
						<section id="schedule"></section>
						<div className="event_schedule">
							<div className="event_schedule_header">
								Schedule and Timeline
                        </div>
							<div className="event_schedule_date">
								<div className="event_schedule_date_header">
									Date
                            </div>
								<div className="event_schedule_date_blanks" >
									<Calendar
										value={selectedDay}
										onChange={setSelectedDay}
										// colorPrimary="#9c88ff" // added this
										calendarClassName="custom-calendar" // and this
										calendarTodayClassName="custom-today-day" // also this
										shouldHighlightWeekends
									/>
								</div>
								<div className="curr_date">
									{selectedDay ? getDate() : 'Select Date'}
								</div>
							</div>
							<div className="event_schedule_time">
								<div className="event_schedule_time_header">
									Start Time
                            </div>
								<div className="event_schedule_time_blanks">
									<div>
										<input type="text" value={TimeH1} maxLength="2" onChange={(e) => setTimeH1(e.target.value)} className="day" placeholder="H"></input>
										<input type="text" value={TimeH2} maxLength="2" onChange={(e) => setTimeH2(e.target.value)} className="day" placeholder="H"></input>

										<input type="text" value={TimeM1} maxLength="2" onChange={(e) => setTimeM1(e.target.value)} className="month" placeholder="M"></input>
										<input type="text" value={TimeM2} maxLength="2" onChange={(e) => setTimeM2(e.target.value)} className="month" placeholder="M"></input>
									</div>
								</div>
							</div>

							<div className="duration_days">
								<div className="duration_days_header">
									Duration
                        	</div>
								<div className="filter__checkbox">
									<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
										<label
											className="filter__form--span">
											Is it a single day event ?
									<input checked={singleDay} className="filter__checkbox--input" type="checkbox" value="greenEggs" />
											<span onClick={() => setSingleDay(!singleDay)} class="filter__checkbox--checkmark"></span>
										</label>
									</form>
								</div>

								{!singleDay && <input value={duration} onChange={e => setDuration(e.target.value)} type="text" placeholder="Days" />
								}
								{singleDay && <div className="event_schedule_time">
									<div className="event_schedule_time_blanks">
										<div>
											<input type="text" value={DurationH1} maxLength="2" onChange={(e) => setDurationH1(e.target.value)} className="day" placeholder="H"></input>
											<input type="text" value={DurationH2} maxLength="2" onChange={(e) => setDurationH2(e.target.value)} className="day" placeholder="H"></input>
											<input type="text" value={DurationM1} maxLength="2" onChange={(e) => setDurationM1(e.target.value)} className="month" placeholder="M"></input>
											<input type="text" value={DurationM2} maxLength="2" onChange={(e) => setDurationM2(e.target.value)} className="month" placeholder="M"></input>
										</div>
									</div>
								</div>}

							</div>
						</div>
						{/* ======================= EVENT SCHEDULE  ============================================= 
                    {/* ======================= EVENT SCHEDULE =============================================  */}
						{/* <div className="event_timeline">
                        <div className="event_timeline_header"></div>
                        <div className="event_timeline_table">
                        </div>
                        <div className="event_timeline_buttons">
                        </div>
                    </div>  */}

						{/* ============================= EVENT PRICE PLAN =========================  */}
						{/* ============================= EVENT PRICE PLAN =========================  */}


						<section id="pricing"></section>
						<div className="event_pricePlan">
							<div className="event_pricePlan_header">
								Price
                        </div>
							<div className="filter__checkbox">
								<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
									<label
										className="filter__form--span">
										Free Event ?
									<input checked={freeEvent} className="filter__checkbox--input" type="checkbox" value="greenEggs" />
										<span onClick={() => setFreeEvent(!freeEvent)} class="filter__checkbox--checkmark"></span>
									</label>
								</form>
							</div>

							{!freeEvent && <input value={price} onChange={e => {
								if (freeEvent) {
									setPrice('0');
								}
								else {
									setPrice(e.target.value)
								}
							}} type="text" placeholder="Price (Rupees)" />}
						</div>

						{/* ============================= EVENT TAGS =========================  */}
						{/* ============================= EVENT TAGS =========================  */}
						<section id="tags"></section>
						<div className="event_tags">
							<div className="event_tags_header">
								Tags
                        </div>
							<div>
								{allTags()}
								<input
									value={tagValue}
									onChange={e => setTagValue(e.target.value)}
									ref={addTagRef}
									className="addTag"
									type="text"
									maxLength="8"
									placeholder="Type"
								/>
							</div>
						</div>

						<section id="location"></section>
						<div className="address">
							<div className="address_header">
								Address
                        </div>
							<div className="filter__checkbox">
								<form className="filter__form" style={{ display: "flex", flexDirection: "column" }}>
									<label
										className="filter__form--span">
										Online Event ?
									<input checked={onlineEvent} className="filter__checkbox--input" type="checkbox" value="greenEggs" />
										<span onClick={() => setOnlineEvent(!onlineEvent)} class="filter__checkbox--checkmark"></span>
									</label>
								</form>
							</div>

							{!onlineEvent ? (
								<>
									<input value={address.lineOne} onChange={e => setAddress({ ...address, lineOne: e.target.value })} type="text" placeholder="Address Line 1" />
									<input value={address.lineTwo} onChange={e => setAddress({ ...address, lineTwo: e.target.value })} type="text" placeholder="Address Line 2" />
									<div>
										<input value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} type="text" placeholder="City" />
										<input value={address.state} onChange={e => setAddress({ ...address, state: e.target.value })} type="text" placeholder="State" />
									</div>
									<input value={address.pin} onChange={e => setAddress({ ...address, pin: e.target.value })} type="text" placeholder="Pin" />
								</>
							)
								: null
							}
						</div>


						{/* ============================= EVENT ADDITIONAL INFO =========================  */}
						{/* ============================= EVENT ADDITIONAL INFO =========================  */}
						<section id="additional"></section>
						<div className="events_addInfo">
							<textarea placeholder="Additional information" />
							<span>Optional</span>
						</div>
						{/* ============================= EVENT LOCATION =========================  */}
						{/* ============================= EVENT LOCATION =========================  */}


						<div className="eventButtons">
							<section id="view"></section>
							<button type="button" className="ViewEvent" onClick={viewTempEvent}>
								Preview event
						</button>

							<section id="post"></section>
							<button type="button" className="PostEvent" onClick={postEvent}>
								Post event
                        </button>
						</div>


						{eventPosted ? <Redirect to="/events" /> : null}
					</form>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		token: state.authState.token,
	}
}

export default connect(mapStateToProps)(HostEvent);
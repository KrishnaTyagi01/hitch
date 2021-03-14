import React, { useState, useEffect, useRef } from 'react';
import Sections from './Sections';
import Button1 from './Button1';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HostEvent = (props) => {
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
	const imgRef = useRef(null);
	const addTagRef = useRef(null);

	const [Title, setTitle] = useState('');
	const [Tagline, setTagline] = useState('');
	const [Overview, setOverview] = useState('');

	const [DateD1, setDateD1] = useState('');
	const [DateD2, setDateD2] = useState('');
	const [DateM1, setDateM1] = useState('');
	const [DateM2, setDateM2] = useState('');
	const [DateY1, setDateY1] = useState('');
	const [DateY2, setDateY2] = useState('');
	const [DateY3, setDateY3] = useState('');
	const [DateY4, setDateY4] = useState('');

	const [TimeH1, setTimeH1] = useState('');
	const [TimeH2, setTimeH2] = useState('');
	const [TimeM1, setTimeM1] = useState('');
	const [TimeM2, setTimeM2] = useState('');

	const [Image, setImage] = useState(null);

	const [Tags, setTags] = useState([]);
	const [tagValue, setTagValue] = useState('');

	const [viewEvent, setViewEvent] = useState(false);
	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			setTags((prevState) => [...prevState, e.target.value]);
			setTagValue('');
			e.stopPropagation();
		}
	};

	useEffect(() => {
		if (addTagRef && addTagRef.current) {
			addTagRef.current.addEventListener('keyup', handleEnter);
		}
		return () => {
			if (addTagRef && addTagRef.current)
				addTagRef.current.removeEventListener('keyup', handleEnter);
		};
	}, []);

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}
		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => {
			URL.revokeObjectURL(objectUrl);
		};
	}, [selectedFile]);

	const getDate = () => {
		return (
			DateY1 + DateY2 + DateY3 + DateY4 + '-' + DateM1 + DateM2 + '-' + DateD1 + DateD2
		);
	};

	const getTime = () => {
		return TimeH1 + TimeH2 + ':' + TimeM1 + TimeM2;
	};

	const getTags = () => {
		let ans = '[';
		for (let i = 0; i < Tags.length; ++i) {
			ans += '"';
			ans += Tags[i];
			ans += '"';
			if (i !== Tags.length - 1) ans += ',';
		}
		ans += ']';
		return ans;
	};

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}

		setSelectedFile(e.target.files[0]);
	};

	const postEvent = async (e) => {
		e.preventDefault();
		// console.log('messi')

		let form_data = new FormData();
		form_data.append('image', Image);
		form_data.append('title', Title);
		form_data.append('description', Tagline);
		form_data.append('scheduled_time', getTime());
		form_data.append('scheduled_date', getDate());
		form_data.append('tags', getTags());
		console.log(form_data);
		let url = 'http://167.71.237.202/events/';

		const res = await axios.post(url, form_data, {
			headers: {
				Authorization: `Token ${props.token}`
			}
		});
	};

	const viewTempEvent = (e) => {
		e.preventDefault();
		setViewEvent(true);
	};

	const allTags = () => {
		return Tags.map((tagName) => {
			return <input className='addTag' value={`#${tagName}`}></input>;
		});
	};

	return (
		<div className='hostEvent'>
			<div className='header'>
				<span>Host Your Event</span>
			</div>
			<div className='maincontainer'>
				<div className='sections'>
					<Sections />
				</div>
				<form className='sec_container'>
					{/* ======================= EVENT NAME =============================================  */}
					{/* ======================= EVENT NAME =============================================  */}
					<section id='basics'></section>
					<div className='event_name'>
						<input
							value={Title}
							onChange={(e) => setTitle(e.target.value)}
							type='text'
							placeholder='Name of event'
						/>
						{/* <span><Button1 /></span> */}
					</div>
					<div className='event_tagline'>
						<textarea
							value={Tagline}
							onChange={(e) => setTagline(e.target.value)}
							placeholder='Tagline for the event'
						/>
						{/* <span><Button1 /></span> */}
					</div>

					{/* ======================= EVENT OVERVIEW =============================================  */}
					{/* ======================= EVENT OVERVIEW =============================================  */}
					<div className='event_overview'>
						<textarea
							value={Overview}
							onChange={(e) => setOverview(e.target.value)}
							placeholder='Overview of the event'
						/>
						{/* <span><Button1 /></span> */}
					</div>

					{/* ======================= EVENT PICTURES =============================================  */}
					{/* ======================= EVENT PICTURES =============================================  */}
					<section id='pictures'></section>
					<div className='event_pictures'>
						<div className='event_pictures_header'>
							<span>Pictures</span>
							<span id='event_pictures_header_right'>Minimum 1 Required</span>
						</div>
						<div className='picturebox_container'>
							<div className='picturebox_container_picture_box'>
								{/* <div className="event_pictures_picture_box_circle">
                                <div>+</div>
                            </div> */}
								{selectedFile && (
									<div className='picture'>
										<img src={preview} />
									</div>
								)}
							</div>
						</div>
						<div className='event_pictures_chooseFile'>
							<input
								ref={imgRef}
								type='file'
								onChange={(e) => {
									onSelectFile(e);
									setImage(e.target.files[0]);
								}}
							/>
							{/* {selectedFile && <img src={preview} />} */}
						</div>
						{/* <div className="event_pictures_all_pictures">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
					</div>
					{/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
					{/* ======================= EVENT HOST AND SPEAKERS =============================================  */}
					<section id='host'></section>
					<div className='event_hosts'>
						<div className='event_hosts_header'>Host and Speakers</div>
						<div className='event_hosts_cards'>
							<div className='event_hosts_card'></div>
							{/* <div className="event_hosts_addCard" >
                                <div className="event_hosts_addCard_circle">
                                    <div>+</div>
                                </div>
                            </div> */}
						</div>
					</div>
					{/* ======================= EVENT SCHEDULE  =============================================  */}
					{/* ======================= EVENT SCHEDULE =============================================  */}
					<section id='schedule'></section>
					<div className='event_schedule'>
						<div className='event_schedule_header'>Schedule and Timeline</div>
						<div className='event_schedule_date'>
							<div className='event_schedule_date_header'>Date</div>
							<div className='event_schedule_date_blanks'>
								<div className='date_blanks'>
									<div style={{ display: 'inline-block' }}>
										<input
											value={DateD1}
											maxLength='1'
											onChange={(e) => setDateD1(e.target.value)}
											className='day'
											placeholder='D'
										></input>
										<input
											style={{ marginRight: '50px' }}
											value={DateD2}
											maxLength='1'
											onChange={(e) => setDateD2(e.target.value)}
											className='day'
											placeholder='D'
										></input>
									</div>
									<div style={{ display: 'inline-block' }}>
										<input
											value={DateM1}
											maxLength='1'
											onChange={(e) => setDateM1(e.target.value)}
											className='month'
											placeholder='M'
										></input>
										<input
											style={{ marginRight: '50px' }}
											value={DateM2}
											maxLength='1'
											onChange={(e) => setDateM2(e.target.value)}
											className='month'
											placeholder='M'
										></input>
									</div>
									<div style={{ display: 'inline-block' }}>
										<input
											value={DateY1}
											maxLength='1'
											onChange={(e) => setDateY1(e.target.value)}
											className='year'
											placeholder='Y'
										></input>
										<input
											value={DateY2}
											maxLength='1'
											onChange={(e) => setDateY2(e.target.value)}
											className='year'
											placeholder='Y'
										></input>
										<input
											value={DateY3}
											maxLength='1'
											onChange={(e) => setDateY3(e.target.value)}
											className='year'
											placeholder='Y'
										></input>
										<input
											value={DateY4}
											maxLength='1'
											onChange={(e) => setDateY4(e.target.value)}
											className='year'
											placeholder='Y'
										></input>
									</div>
								</div>
								{/* <div className="button">
                                    <Button1 />
                                </div> */}
								{/* {autoTab('date_blanks')} */}
							</div>
						</div>
						<div className='event_schedule_time'>
							<div className='event_schedule_time_header'>Start Time</div>
							<div className='event_schedule_time_blanks'>
								<div>
									<input
										value={TimeH1}
										maxLength='2'
										onChange={(e) => setTimeH1(e.target.value)}
										className='day'
										placeholder='H'
									></input>
									<input
										value={TimeH2}
										maxLength='2'
										onChange={(e) => setTimeH2(e.target.value)}
										className='day'
										placeholder='H'
									></input>

									<input
										value={TimeM1}
										maxLength='2'
										onChange={(e) => setTimeM1(e.target.value)}
										className='month'
										placeholder='M'
									></input>
									<input
										value={TimeM2}
										maxLength='2'
										onChange={(e) => setTimeM2(e.target.value)}
										className='month'
										placeholder='M'
									></input>
								</div>
								{/* <div className="button">
                                    <Button1 />
                                </div> */}
							</div>
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
					<section id='pricing'></section>
					<div className='event_pricePlan'>
						<div className='event_pricePlan_header'>Current Price Plan</div>
						{/* <div className="change_plan">
                            <Button1 />
                        </div> */}
						<div className='plan'></div>
					</div>

					{/* ============================= EVENT TAGS =========================  */}
					{/* ============================= EVENT TAGS =========================  */}
					<section id='tags'></section>
					<div className='event_tags'>
						<div className='event_tags_header'>Tags</div>
						<div>
							{allTags()}
							<input
								value={tagValue}
								onChange={(e) => setTagValue(e.target.value)}
								ref={addTagRef}
								className='addTag'
								type='text'
								maxLength='8'
							/>
						</div>
						{/* <span><Button1 /></span> */}
					</div>
					{/* ============================= EVENT ADDITIONAL INFO =========================  */}
					{/* ============================= EVENT ADDITIONAL INFO =========================  */}
					<section id='additional'></section>
					<div className='events_addInfo'>
						<textarea placeholder='Additional information' />
						<span>Optional</span>
						{/* <span>
                            <Button1 />
                        </span> */}
					</div>
					{/* ============================= EVENT LOCATION =========================  */}
					{/* ============================= EVENT LOCATION =========================  */}
					{/* <div style={{ margin: '100px' }}>
                        <CustomMap />
                    </div> */}
					{/* ============================= EVENT LOCATION =========================  */}
					{/* ============================= EVENT LOCATION =========================  */}
					<section id='view'></section>
					<button type='button' className='ViewEvent' onClick={viewTempEvent}>
						View your event
						{viewEvent ? (
							<Redirect
								to={{
									pathname: '/event-details',
									state: {
										event: {
											image: preview,
											title: Title,
											description: Tagline,
											scheduled_time: getTime(),
											scheduled_date: getDate(),
											tags: Tags
										}
									}
								}}
							/>
						) : null}
					</button>
					<section id='post'></section>
					<button type='button' className='PostEvent' onClick={postEvent}>
						Post event
					</button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.authState.token
	};
};

export default connect(mapStateToProps)(HostEvent);

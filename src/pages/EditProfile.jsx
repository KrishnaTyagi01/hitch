import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { editProfile } from '../redux/actions/profileActions';
import ConfirmationPrompt from '../components/Common/ConfirmationPrompt';
import Loading from '../components/Common/Loading';

const EditProfile = (props) => {
	const [confirmationPromptActive, setConfirmationPromptActive] = useState(false);
	const [profileData, setProfileData] = useState(null);
	const [data, setData] = useState(null);
	const [fields, setFields] = useState(null);

	// const {
	// 	username,
	// 	name,
	// 	alias,
	// 	image,
	// 	email,
	// 	role,
	//,
	// 	personal_interests,
	// 	explore_all,
	// 	learn_and_grow,
	// 	mentoring,
	// 	search_job,
	// 	hire_talent,
	// 	collaborate,
	// 	learn_and_grow_tags,
	// 	mentoring_tags,
	// 	search_job_tags,
	// 	hire_talent_tags,
	// 	collaborate_tags,
	// 	about,
	// 	website,
	// 	location
	// } = profileData ?? {};

	const handleInputChange = (e) => {
		setFields((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		for (let entry in fields) {
			formData.append(entry, fields[entry] ?? '');
			console.log(formData.get(entry));
		}
		// formData.append('location', fields['location']);
		props.editProfile(props.profile.id, formData, () => {
			props.history.push('/profile');
		});

		// setData(formData);
		// console.log(data);
		// setConfirmationPromptActive(true);
	};

	useEffect(() => {
		const { about, email, location } = props.profile ?? {};
		setFields({ about, email, location });
		return () => {
			setFields(null);
		};
	}, [props]);

	return (
		<div className='editProfile'>
			{!fields ? (
				<Loading />
			) : (
				<>
					<form className='editProfile__form' onSubmit={handleSubmit}>
						<h2 className='editProfile__form__header'>Edit profile</h2>
						<div className='editProfile__form__entries'>
							<div className='editProfile__form__entries__entry'>
								<label>About</label>
								<textarea
									required
									name='about'
									value={fields?.about || ''}
									onChange={handleInputChange}
									placeholder='Enter a short description of yourself'
								/>
							</div>

							<div className='editProfile__form__entries__entry'>
								<label>Email ID</label>
								<input
									required
									name='email'
									value={fields?.email || ''}
									onChange={handleInputChange}
									placeholder='Email ID'
									type='email'
								/>
							</div>

							<div className='editProfile__form__entries__entry'>
								<label>Location</label>
								<input
									required
									name='location'
									value={fields?.location || ''}
									onChange={handleInputChange}
									placeholder='Your city/town'
									type='text'
								/>
							</div>
						</div>

						<div className='editProfile__form__buttons'>
							<button type='submit' className='custom-button submit'>
								Submit
							</button>
							<button
								type='button'
								className='custom-button cancel'
								onClick={props.history.goBack}
							>
								Cancel
							</button>
						</div>
					</form>

					<ConfirmationPrompt
						active={confirmationPromptActive}
						closePrompt={() => {
							setConfirmationPromptActive(false);
						}}
						confirmParams={[props.profile?.id, 'haha']}
						// id={props.profile?.id}
						// data={data}
						confirm={(id, data) => {
							props.editProfile(id, data);
						}}
					/>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profileState.profile
});

export default connect(mapStateToProps, { editProfile })(EditProfile);

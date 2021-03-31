import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ConfirmationPrompt from '../Common/ConfirmationPrompt';
import Loading from '../Common/Loading';
import { editProfile } from '../../redux/actions/profileActions';

const EditProfile = (props) => {
	const [confirmationPromptActive, setConfirmationPromptActive] = useState(false);
	// const [profileData, setProfileData] = useState(null);
	// const [data, setData] = useState(null);
	const [fields, setFields] = useState(null);

	const handleInputChange = (e) => {
		setFields((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleInputArrayChange = (e, i) => {
		let arr = [...fields[e.target.name]];
		arr[i] = e.target.value;
		setFields((prevState) => ({ ...prevState, [e.target.name]: arr }));
	};

	const addInputArrayItem = (name) => {
		let arr = [...fields[name], ''];
		setFields((prevState) => ({ ...prevState, [name]: arr }));
	};

	const removeInputArrayItem = (name, i) => {
		let arr = [...fields[name]];
		arr.splice(i, 1);
		setFields((prevState) => ({ ...prevState, [name]: arr }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('about', fields['about']);
		formData.append('email', fields['email']);
		formData.append('location', fields['location']);
		formData.append(
			'professional_interests',
			JSON.stringify(fields['professional_interests'])
		);
		formData.append('personal_interests', JSON.stringify(fields['personal_interests']));

		props.editProfile(props.profile.id, formData, () => {
			props.history.push('/profile', { message: 'Profile updated' });
		});

		// setData(formData);
		// console.log(data);
		// setConfirmationPromptActive(true);
	};

	useEffect(() => {
		const { about, email, location, professional_interests, personal_interests } =
			props.profile ?? {};
		setFields({
			about,
			email,
			location,
			professional_interests: JSON.parse(professional_interests ?? '[]'),
			personal_interests: JSON.parse(personal_interests ?? '[]')
		});
		return () => {
			setFields(null);
		};
	}, [props.profile]);

	return (
		<div className='editProfile'>
			{!fields ? (
				<Loading />
			) : (
				<>
					<form className='editProfile__form' onSubmit={handleSubmit}>
						<h2 className='editProfile__form__header'>Edit profile</h2>
						<div className='editProfile__form__entries'>
							<fieldset id='personal-details'>
								<legend>Personal details</legend>
								<div className='editProfile__form__entries__entry'>
									<label>About</label>
									<textarea
										name='about'
										value={fields.about || ''}
										rows='4'
										onChange={handleInputChange}
										placeholder='Enter a short description of yourself'
									/>
								</div>

								<div className='editProfile__form__entries__entry'>
									<label>Email ID</label>
									<input
										required
										name='email'
										value={fields.email || ''}
										onChange={handleInputChange}
										placeholder='Email ID'
										type='email'
									/>
								</div>

								<div className='editProfile__form__entries__entry'>
									<label>Location</label>
									<input
										name='location'
										value={fields.location || ''}
										onChange={handleInputChange}
										placeholder='Enter your location'
										type='text'
									/>
								</div>
							</fieldset>

							<fieldset id='preferences'>
								<legend>Preferences</legend>

								<h6>Professional Interests</h6>
								<div className='editProfile__form__entries__entry'>
									{fields.professional_interests?.map((item, i) => (
										<div key={`prof${i}`}>
											<input
												required
												name='professional_interests'
												value={fields.professional_interests[i] || ''}
												onChange={(e) => {
													handleInputArrayChange(e, i);
												}}
												placeholder='Enter your interest'
												type='text'
											/>
											<button
												className='small-button cancel'
												onClick={() => {
													removeInputArrayItem('professional_interests', i);
												}}
											>
												Remove
											</button>
										</div>
									))}
								</div>
								<button
									className='small-button submit block-button'
									onClick={() => {
										addInputArrayItem('professional_interests');
									}}
								>
									Add interest
								</button>

								<h6>Personal Interests</h6>
								<div className='editProfile__form__entries__entry'>
									{fields.personal_interests?.map((item, i) => (
										<div key={`pers${i}`}>
											<input
												required
												name='personal_interests'
												value={fields.personal_interests[i] || ''}
												onChange={(e) => {
													handleInputArrayChange(e, i);
												}}
												placeholder='Enter your interest'
												type='text'
											/>
											<button
												className='small-button cancel'
												onClick={() => {
													removeInputArrayItem('personal_interests', i);
												}}
											>
												Remove
											</button>
										</div>
									))}
								</div>
								<button
									className='small-button submit block-button'
									onClick={() => {
										addInputArrayItem('personal_interests');
									}}
								>
									Add interest
								</button>
							</fieldset>
						</div>

						<div className='editProfile__form__buttons'>
							<button type='submit' className='custom-button submit'>
								Submit
							</button>
							<button
								type='button'
								className='custom-button cancel'
								onClick={() => {
									props.history.push('/profile');
								}}
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

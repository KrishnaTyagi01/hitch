import { withRouter } from 'react-router-dom';
import jobIcon from '../../icons/profile/jobIcon.svg';
import buildingIcon from '../../icons/profile/buildingIcon.svg';
import locationIcon from '../../icons/profile/locationIcon.svg';

const ProfileCard = (props) => {
	return (
		<div className='profilecard'>
			<div className='profilecard__mid'>
				<img
					className='profilecard__mid--pic'
					src={props.profile?.image}
					alt='profile pic'
				/>
				<h4 className='profilecard__mid--name'>{props.profile?.name}</h4>
			</div>
			<hr />
			<div className='profilecard__lower'>
				<div className='profilecard__lower--item'>
					<img src={jobIcon} alt='icon' className='profilecard__lower--icon' />
					<span className='profilecard__lower--text'>
						{props.profile?.role ? props.profile.role : '--'}
					</span>
				</div>
				<div className='profilecard__lower--item'>
					<img src={buildingIcon} alt='icon' className='profilecard__lower--icon' />
					<span className='profilecard__lower--text'>
						{props.profile?.company ? props.profile.company : '--'}
					</span>
				</div>
				<div className='profilecard__lower--item'>
					<img src={locationIcon} alt='icon' className='profilecard__lower--icon ' />
					<span className='profilecard__lower--text' id='profile__lower--locationtext'>
						{props.profile?.location ? props.profile.location : '--'}
					</span>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ProfileCard);

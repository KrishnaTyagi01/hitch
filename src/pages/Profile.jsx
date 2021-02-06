import { useEffect, useState } from 'react';

import About from '../components/profile_components/About'
import EventAttended from '../components/profile_components/EventAttended'
import HeaderSection from '../components/profile_components/HeaderSection'
import Hero from '../components/profile_components/Hero'
import HostedEvents from '../components/profile_components/HostedEvents'
import ProfileCard from '../components/profile_components/ProfileCard'
import {ConnectionButton, FollowButton} from '../components/profile_components/Buttons'

import {isAuthenticated} from '../API/Auth';
import {getSelfProfile} from '../API/User';


const Profile = () => {

	const {token} = isAuthenticated();
	const [values, setValues] = useState({
		about: '',
		created_at: '',
		email:'',
		explore_all: '',
		guidance: '',
		hosted_events: '',
		id: '',
		image: '',
		is_active: '',
		job:'',
		location:'',
		looking_for:'',
		mentoring:'',
		name:'',
		personal_interests: '',
		phone: '',
		professional_interests: '',
		url: '',
		username: ''
	})
	console.log(values);
	useEffect(()=>{
	  getSelfProfile(token)
	  .then(res=>{
		  if(res.error){
			  console.log(res.error)
		  }
		  else{
			  setValues({
				  ...values,
				  about: res.about,
				  created_at: res.created_at,
				  email: res.email,
				  explore_all: res.explore_all,
				  guidance: res.guidance,
				  hosted_events: res.hosted_events,
				  id: res.id,
				  image: res.image,
				  is_active: res.is_active,
				  job: res.job,
				  location: res.location,
				  looking_for: res.looking_for,
				  mentoring: res.mentoring,
				  name: res.name,
				  personal_interests: res.personal_interests,
				  phone: res.phone,
				  professional_interests: res.professional_interests,
				  url: res.url,
				  username: res.username
			  })
		  }
	  })
	  .catch(err=>{
		  console.log(err);
	  })
	}, [])

	console.log(values)

	return (
		<section className="profilepage">
			<div className="profile_top">
				<Hero values={values} setValues={setValues}/>
				<HeaderSection values={values} setValues={setValues}/>
			</div>
			<div className="profile">

				<div className="profile__left">
					<div className="profile__left--profilecard">
						<ProfileCard values={values} setValues={setValues} />
					</div>
					<div className="profile__left--connectionbtn">
						<ConnectionButton values={values} setValues={setValues} />
					</div>
					<div className="profile__left--followbtn">
						<FollowButton values={values} setValues={setValues}/>
					</div>
				</div>
				
				<div className="profile__right">
					<div className="profile__right--about">
						<About values={values} setValues={setValues}/>
					</div>
					<div className="profile__right--hostedevents">
						<HostedEvents values={values} setValues={setValues}/>
					</div>
					<div className="profile__right--eventsattended">
						<EventAttended values={values} setValues={setValues}/>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Profile;
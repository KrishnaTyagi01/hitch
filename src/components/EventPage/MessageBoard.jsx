import { useState } from 'react';

import sendarrow from '../../icons/sendarrow.svg';
import user from '../../icons/user.png';

const messages = [
	{
		author: {
			image: user,
			name: 'user1'
		},
		text: 'message 1'
	},
	{
		author: {
			image: user,
			name: 'user2'
		},
		text: 'message 2'
	},
	{
		author: {
			image: user,
			name: 'user3'
		},
		text: 'message 3'
	},
	{
		author: {
			image: user,
			name: 'user4'
		},
		text: 'message 4'
	},
	{
		author: {
			image: user,
			name: 'user1'
		},
		text: 'message 1'
	},
	{
		author: {
			image: user,
			name: 'user2'
		},
		text: 'message 2'
	},
	{
		author: {
			image: user,
			name: 'user3'
		},
		text: 'message 3'
	},
	{
		author: {
			image: user,
			name: 'user4'
		},
		text: 'message 4'
	}
];

const MessageBoard = (props) => {
	const addMessage = (e) => {
		e.preventDefault();
		console.log('add message');
	};

	return (
		<section className='message-board'>
			<h3 className='heading'>MESSAGE BOARD</h3>
			<div className='board'>
				<div className='messages-container'>
					{messages.map((message, index) => (
						<div className='message' key={index}>
							<div className='profile-picture'>
								<img src={message.author.image} alt='profile picture' className='pic' />
							</div>
							<div className='details'>
								<h4 className='author-name'>{message.author.name}</h4>
								<p className='text'>{message.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className='new-message'>
					<form onSubmit={addMessage}>
						<div className='textarea-wrapper'>
							<input className='message-box' placeholder='Type your message' />
							<button type='submit' className='submit-button'>
								<img src={sendarrow} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default MessageBoard;

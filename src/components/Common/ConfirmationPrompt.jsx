import { useEffect, useState, useRef } from 'react';

const ConfirmationPrompt = (props) => {
	const confirmationPrompt = useRef(null);
	const confirmationPromptContent = useRef(null);

	const handleOutsideClick = (e) => {
		if (
			confirmationPromptContent.current &&
			!confirmationPromptContent.current.contains(e.target)
		) {
			props.closePrompt();
		}
	};

	useEffect(() => {
		confirmationPrompt.current.addEventListener('click', handleOutsideClick);
		confirmationPrompt.current.addEventListener('keyup', (e) => {
			if (e.keyCode === 27) {
				props.closePrompt();
			}
		});

		return () => {
			console.log('clean up');
			// document.body.removeEventListener('keyup');
			// console.log('removed listener');
		};
	}, [confirmationPrompt, props.active]);

	return (
		<div
			className={`confirmation-prompt ${props.active ? 'show-confirmation-prompt' : ''}`}
			ref={confirmationPrompt}
		>
			<div className='confirmation-prompt__content' ref={confirmationPromptContent}>
				<h3 className='confirmation-prompt__content__header'>Are you sure?</h3>
				<button
					className='confirmation-prompt__content__close'
					onClick={props.closePrompt}
				>
					<i className='fas fa-times-circle fa-2x'></i>
				</button>
				<hr />
				<div className='confirmation-prompt__content__buttons'>
					<button
						className='custom-button submit'
						onClick={() => {
							// console.log([...props.confirmParams]);
							props.confirm([...props.confirmParams]);
						}}
					>
						Confirm
					</button>
					<button className='custom-button cancel' onClick={props.closePrompt}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPrompt;

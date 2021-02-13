import React from 'react';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';

export default function Page404() {
	return (
		<div>
			<Navbar />
			<div className='page404'>
				<h1>Uh oh...</h1>
				<p>That page doesn't exist</p>
			</div>
			<Footer />
		</div>
	);
}

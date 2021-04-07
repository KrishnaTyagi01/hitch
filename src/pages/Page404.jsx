import { Helmet } from 'react-helmet';

export default function Page404() {
	return (
		<div className='page404'>
			<Helmet>
				<title>Page not found | Mezami</title>
			</Helmet>
			<h1>Uh oh...</h1>
			<p>That page doesn't exist</p>
		</div>
	);
}

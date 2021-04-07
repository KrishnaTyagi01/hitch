import { Link } from 'react-router-dom';

const Tags = (props) => {
	const tags =
		props.tags &&
		JSON.parse(props.tags).map((tag, index) => (
			<Link to={`/tag/${tag}`} key={index} className='tag'>
				#{tag}
			</Link>
		));

	return (
		<section className='tags-container'>
			<h2 className='heading'>TAGS</h2>
			<div className='tags'>{tags}</div>
		</section>
	);
};

export default Tags;

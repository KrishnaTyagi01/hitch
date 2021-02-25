import { useEffect, useState } from "react/cjs/react.development";

const Tags = (props) => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		if (props.tags && props.tags.length > 2) {
			let temp = props.tags.substr(2, props.tags.length - 4);
			temp = temp.replace(/\"/g, '');
			let res = temp.split(',');
			setTags([...res]);
		}
	}, [])

	const myTags = tags.map(tag => {
		// console.log(tag)
		return <button className="tags__btns--btn">#{tag}</button>
	})
	// console.log(tags);

	return (
		<>
			<h2 className="tags__heading">TAGS</h2>
			<div className="tags">
				<div className="tags__btns">
					{myTags}

				</div>


			</div>
		</>
	)
}

export default Tags;
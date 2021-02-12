import { useState, useRef } from 'react'
import categories from './categories.json'

export default function Explore() {

	const [start, setStart] = useState(0);
	const categoriesDiv = useRef(null)
	const prevButton = useRef(null)
	const nextButton = useRef(null)

	
	const loadPrev = () => {

		// const childDivs = categoriesDiv.current.children
		const translateValue = getComputedStyle(categoriesDiv.current).getPropertyValue('--explore-translate-value')
		console.log(translateValue);

		if(start!==0) {
			setStart(start-1)
			categoriesDiv.current.style.setProperty('--explore-translate-value', `calc( ${translateValue} + 366px )`)
			console.log(translateValue);
		}
		else {
			console.log('reached first one')
			// prevButton.current.style.setProperty('cursor', 'not-allowed')
		}
	}

	const loadNext = () => {

		// const childDivs = categoriesDiv.current.children
		let translateValue = getComputedStyle(categoriesDiv.current).getPropertyValue('--explore-translate-value')
		console.log(translateValue);
		
		if(start!==categories.length-3) {
			setStart(start+1)
			categoriesDiv.current.style.setProperty('--explore-translate-value', `calc( ${translateValue} - 366px )`)
			console.log(translateValue);
		} 
		else {
			console.log('reached last one')
			// nextButton.current.style.setProperty('cursor', 'not-allowed')
		}
	}

	return (
		<div className='explore'>
			<h2 className='section-name'>Explore</h2>
			<div className='categories-container'>

				<div className='categories' ref={categoriesDiv}>
				{ categories.map((category, index) =>
					<div 
						key={index}
						className={`category ${index === start ? 'active' : ''}`}
						style={{ backgroundImage: `url( ${category.picture} )` }}
						>
						<p>{category.name}</p>
					</div>
				)}
				</div>
				
				<button 
					className={`prev ${start === 0 ? 'not-allowed' : ''}`}
					onClick={loadPrev}
					ref={prevButton}
				>
					&#10094;
				</button>
				<button 
					className={`next ${start === (categories.length-3) ? 'not-allowed' : ''}`}
					onClick={loadNext} 
					ref={nextButton}
				>
					&#10095;
				</button>

			</div>
		</div>
	)
}

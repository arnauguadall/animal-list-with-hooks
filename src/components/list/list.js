import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';

export default function List() {
	const [animalList, setAnimalList] = useState(['']);
	useEffect(() => {
		axios.get(`https://dog.ceo/api/breeds/list/all`)
			.then(response => {
				setAnimalList(response.data.message);
			})
	})

	return (
		<ul>
			{Object.keys(animalList).map(animal =>
				<li key={animal}>
					{animal}
				</li>)}
		</ul>
	);
}
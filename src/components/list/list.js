import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';

/* 
	The class declaration 'class List extends Component' will be replaced for 'export default function List()'
	in order every 'component' will be a function and no longer we will declare a React Class.
*/
export default function List() {
	/* 
		State variables will be defined separetly with a method to execute them and a initial value.

		animalList:     State variable
		setAnimalList:  Method to set the value to 'animalList' variable
		useState: 		Work the same was as default props giving the 'animalList'
				   		an initial value in this case an empty array.
	*/
	const [animalList, setAnimalList] = useState([]);

	/* 
		The old lifecycle (componentDidMount, componentDidUpdate, componentWillUnmount, ...) has been simplified
		by using 'useEffect' and this method will be able to subscribe and unsubscribe from an endpoint call for example.

		Also, you can have many 'useEffect' methods to take care of several functionalities you want to use.
	*/
	useEffect(() => {
		axios.get(`https://dog.ceo/api/breeds/list/all`)
			.then(response => {
				// Setting 'animalList' by executing 'setAnimalList' when the data has been received.
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
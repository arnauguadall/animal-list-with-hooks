import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';

/* 
	The class declaration 'class List extends Component' will be replaced for
	'export default function List()' in order every 'component' will be a
	function and no longer we will declare a React Class.
*/
export default function List() {
	/* 
		State variables will be defined separetly with a method to execute them and a initial value.

		dogList:    State variable
		setdogList: Method to set the value to 'dogList' variable
		useState: 	Work the same was as default props giving the 'dogList'
				   	an initial value in this case an empty array.
	*/
	const [dogList, setdogList] = useState([]);

	// Giving the value to our custom HOOK.
	useCustomTitleChange("Dog list");

	/* 
		The old lifecycle (componentDidMount, componentDidUpdate, componentWillUnmount, ...)
		has been simplified by using 'useEffect' and this method will be able to subscribe and
		unsubscribe from an endpoint call for example.

		Also, you can have many 'useEffect' methods to take care of several
		functionalities you want to use.
	*/
	useEffect(() => {
		axios.get(`https://dog.ceo/api/breeds/list/all`)
			.then(response => {
				// Setting 'dogList' by executing 'setdogList' when the data has been received.
				setdogList(response.data.message);
			})
	})

	/* 
		Custom HOOK to change the title when the webpage refreshes. In this case we could use it
		this with an input change, button event or if we receive some data the 'useEffect'
		will know when it need to rerender and execute the effect.
	*/
	function useCustomTitleChange(title) {
		useEffect(() => {
			document.title = title;
		})
	}

	return (
		<ul>
			{Object.keys(dogList).map(dog =>
				<li key={dog}>
					{dog}
				</li>)}
		</ul>
	);
}
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render () {
		return (
				<div>
					<h1>This is React</h1>
				</div>
			)
	}
}

document.addEventListener("DOMContentLoaded", function () {
	render(
			<App/>,
			document.getElementById('app')
		);
});

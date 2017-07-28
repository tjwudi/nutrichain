import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter, Link} from 'react-router-dom';

import FrontPage from './frontpage';

class App extends React.Component {
	render () {
		return (
				<div>
					<h1>NutriChain</h1>
					<h3>The Nutrition Meal Planner on a Blockchain</h3>
					{this.props.children ? this.props.children : <FrontPage />}
				</div>
			)
	}
}

const AppRouter = (
		<BrowserRouter>
			<Route path="/" component={App}>
			</Route>
		</BrowserRouter>
);

document.addEventListener("DOMContentLoaded", function () {
	render(
			AppRouter,
			document.getElementById('app')
		);
});

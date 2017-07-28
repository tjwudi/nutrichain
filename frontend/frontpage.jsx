import React from 'react';

const PREFERENCES = ['All Da Gainz', 'Stay Fit', 'Drop Da Bass(lbs)'];

class FrontPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userPreference: null
		};
	}
	
	setPreferences (e) {
		this.setState({userPreference: e.target.innerText});
	}

	render () {
		let preferences = PREFERENCES.map((pref, idx) => {
			return ( <li key={idx} onClick={this.setPreferences.bind(this)} className="preference-item">{pref}</li> );
		});
		return (
				<div>
					<h4>Your current preference is:</h4>
					<p className="selected-pref">{this.state.userPreference ? this.state.userPreference : "Plz select below"}</p>
					<p>Please set your preferences:</p>
					<ul className="preferences-container">
						{preferences}
					</ul>
				</div>
			)
	}
}

export default FrontPage;

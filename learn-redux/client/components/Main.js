import React from 'react';
import { Link } from 'react-router';

export default const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to='/'>Reduxstagram</Link>
				</h1>
			</div>
		)
	}
});

import React from 'react';
import Card from './card';

// PageOne Component
var PageTwo = React.createClass({
	getInitialState() {
		return {
			projects: []
		}
	},

	componentWillMount() {
		var json = require('./data.json');
		var projKeys = Object.keys(json['Projects']);
		var proj = [];
		projKeys.forEach(function(i) {
			proj.push(json["Projects"][i]);
		})
		this.setState({
			projects: proj
		})
		console.log(proj);
	},

	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
			{this.state.projects.map(function(d, i) {
				return <Card title={d.title} image={d.image} desc={d.desc} url={d.url}/>
			})}
			</div>
		);
	}
});

export default PageTwo;
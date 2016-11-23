import React from 'react';
import Card from './card';
import './activities.css';

// PageOne Component
var PageThree = React.createClass({
	getInitialState() {
		return {
			projects: []
		}
	},

	componentWillMount() {
		var json = require('./data.json');
		var projKeys = Object.keys(json['Activities']);
		var proj = [];
		projKeys.forEach(function(i) {
			proj.push(json["Activities"][i]);
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

export default PageThree;
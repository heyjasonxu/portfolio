import React from 'react';
import Card from './card';
import $ from 'jquery';
import Skill from "./skill";

// PageOne Component
var AboutMe = React.createClass({
	getInitialState() {
		return({
			skills: []
		})
	},

	componentWillMount () {
		var json = require("./data.json");
		var skills = [];
		var skillKeys = Object.keys(json['Skills']);
		skillKeys.forEach(function(i) {
			skills.push(json["Skills"][i]);
		})
		this.setState({
			skills: skills
		})
		
	},
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div>
			<div className="row">
				<div className="col s12 m5">
					<div className="card-panel yellow darken-2">
					<h3 className="green-text">Contact Me </h3>
						<div className="white-text">
							<p><a href="mailto:jasonx24@edu.edu">Email: jasonx24@uw.edu</a> </p>
							<p><a href="tel:435-512-3056">Phone: 435-512-3056</a> </p>
							<p><a href="https://facebook.com">Facebook</a> </p>
							<p><a href="https://twitter.com">Twitter</a> </p>
							<p><a href="https://linkedin.com">Linkedin</a> </p>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col s12 m5">
					<div className="card-panel green darken-2">
					<h3 className="yellow-text">Education </h3>
						<div className="white-text">
							
						
						<p>Univeristy of Washington</p>
						<p>Bachelors of Science in Informatics, June '18</p>
						<p>Seattle, WA</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col s12 m5">
					<div className="card-panel blue darken-2">
					<h3 className="yellow-text">Professional Skills </h3>
						<div className="white-text">
							<div>
								{this.state.skills.map(function(d, i) {
									return <Skill skill={d.skill} />
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
            
			</div>
		);
	}
});

export default AboutMe;
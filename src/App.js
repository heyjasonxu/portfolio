// Firebase twitter-like application
import React from 'react';
import './App.css';
import { Link } from 'react-router';
import '../node_modules/font-awesome/css/font-awesome.css'

// Create app
var App = React.createClass({
    
    render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<div className = "navbar">
						<Link className="link" activeClassName='active' to="/"><i className="fa fa-home"></i></Link>
						<Link className="link" activeClassName='active' to="/AboutMe">About Me</Link>
						<Link className="link" activeClassName='active' to="/Projects">Projects</Link>
						<Link className="link" activeClassName='active' to="/Activities">Activities</Link>
					</div>
					<div className="children">
						{this.props.children}
					</div>
				</div>
		);
	}
});
export default App;

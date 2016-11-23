import React from 'react';

// PageOne Component
var Skill = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
        var test = "width: ";
		return (
            <div>
            <p>{this.props.skill}</p>
            <div className="progress">
            <p>{this.props.skill}</p>
                <div className="determinate" style={this.props.pro}></div>
            </div>
            </div>


		);
	}
});

export default Skill;
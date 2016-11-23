import React from 'react';

// PageOne Component
var Card = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (

            <div className="card small green darken-2 ">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.image}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.title}<i class="material-icons right"></i></span>
                    <p><a href={this.props.url}>This is a link</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
                    <p>{this.props.desc}</p>
                </div>
            </div>

		);
	}
});

export default Card;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import AboutMe from './PageOne';
import Projects from './PageTwo';
import Activities from './PageThree';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="AboutMe" component={AboutMe}/>
                <Route path="Projects" component={Projects}/>
                <Route path="Activities" component={Activities}/>
            </Route>
        </Router>,
  document.getElementById('root')
);

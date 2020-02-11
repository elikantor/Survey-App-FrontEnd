import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import CreateSurvey from './CreateSurveyContainer'
// import SurveyContainer from './SurveyContainer'

ReactDOM.render(
    // <Router>
    //     {/* <Route path="/" component={Home} />
    //     <Route path="/create" component={CreateSurvey} />
    //     <Route path="/surveys" component={SurveyContainer}/> */}
    // </Router>
    <App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';


class Index extends React.Component {
    render() {
        return (
            <Router>

            </Router>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
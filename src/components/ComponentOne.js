
import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

export default class ComponentOne extends Component {
    render() {
        return(
            <div>
                Hello, world
                <Link to="/two">Link</Link>
            </div>
        )
    }
}
import React, {Component} from 'react';
import {Link}  from 'react-router-dom';

require('../css/server.css');

export const ComponentOne = props => (
    <div>Hello motherfuck`a
        <p className="a">test Component1</p>
        <Link to="/two">hello</Link>
    </div>
);

export default ComponentOne;
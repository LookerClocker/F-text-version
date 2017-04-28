import React, {Component} from 'react';
import {Link}  from 'react-router-dom';

import '../css/server2.css';

export const ComponentOne = props => (
    <div>Hello motherfuck`a
        <p>test</p>
        <Link to="/two">hello</Link>
    </div>
);

export default ComponentOne;
import React, {Component} from 'react';
import {Link}  from 'react-router-dom';

import styles from '../css/server.css';

export const ComponentOne = props => (
    <div>Hello motherfuck`a
        <p className={styles.a}>test Component1</p>
        <Link to="/two">hello</Link>
    </div>
);

export default ComponentOne;
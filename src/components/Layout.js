import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../static/css/main.css';

export const Layout = props => (
    <div className="app-container">
        <header>
            <Link to="/">
                Layout Link
            </Link>
        </header>
        <div>{props.children}</div>
        <footer>
            <p>
               footer
            </p>
        </footer>
    </div>
);

export default Layout;
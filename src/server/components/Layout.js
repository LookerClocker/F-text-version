import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/server.css';

export const Layout = props => (
    <div>
        <header>
            <Link to="/">
                Layout Link
            </Link>
        </header>
        <p className={styles.a}>hello Layout</p>
        <div>{props.children}</div>
        <footer>
            <p>
               footer
            </p>
        </footer>
    </div>
);

export default Layout;
import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
    <div className="app-container">
        <header>
            <Link to="/">
                Layout Link
            </Link>
        </header>
        <div className="app-content">{props.children}</div>
        <footer>
            <p>
               footer
            </p>
        </footer>
    </div>
);

export default Layout;
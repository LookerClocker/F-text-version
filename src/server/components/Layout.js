import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
    <div>
        <header>
            <Link to="/">
                Layout Link
            </Link>
        </header>
        <p>hello Layout</p>
        <div>{props.children}</div>
        <footer>
            <p>
               footer
            </p>
        </footer>
    </div>
);

export default Layout;
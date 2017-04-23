'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/ComponentOne';
import IndexPage from './components/ComponentTwo';



const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
    </Route>
);

export default routes;
'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';


const routes = (
    <Route path="/" component={ComponentOne}>
        <IndexRoute component={ComponentOne}/>
        <Route path="/two" component={ComponentTwo}/>
    </Route>
);

export default routes;
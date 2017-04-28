import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'


export const App = () => (
    <Layout>
        <Switch>
            <Route exact path="/" render={ComponentOne} />
            <Route exact path="/two" render={ComponentTwo} />
        </Switch>
    </Layout>
);

export default App;
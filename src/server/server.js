import React from 'react';
import ReactDomServer from 'react-dom/server';
import {Server} from 'http-server';
import {match, RouterContext} from 'react-router';
import path from 'path';
import {StaticRouter as Router} from 'react-router-dom';
import {App} from './components/App';


const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

let express = require('express');
let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
    let markup = '';
    let status = 200;

    // if (process.env.UNIVERSAL) {
    const context = {};
    markup = ReactDomServer.renderToString(
        <Router location={req.url} context={context}>
            <App />
        </Router>,
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        return res.redirect(302, context.url);
    }

    if (context.is404) {
        status = 404;
    }
    // }

    return res.status(status).render('index', {markup});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import MainIndex from './components/MainIndex';

let React = require('react');
let MainIndex = require('./components/ComponentTwo');
let renderToString = require('react-dom/server');

var ReactDOMServer = require('react-dom/server');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

let express = require('express');
let app = express();

require("babel-register");

let ComponentFactory = React.createFactory(MainIndex);

app.get('/', function (req, res) {

    // let markup = renderToString(<MainIndex/>);

    let markup = ReactDOMServer.renderToString(ComponentFactory());

    // return res.render('index', {markup});
    return res.send(markup);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

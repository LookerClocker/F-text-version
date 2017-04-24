import React from 'react';
import ReactDomServer from 'react-dom/server';
import ComponentOne from './components/ComponentOne';

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

let express = require('express');
let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let markup = ReactDomServer.renderToString(<ComponentOne/>);

    return res.render('index.ejs', {markup});

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

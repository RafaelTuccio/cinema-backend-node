const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const filmesRoute = require('../routes/filmesRoutes');
const cinemasRoute = require('../routes/cinemasRoutes');
const sessoesRoute = require('../routes/sessoesRoutes');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(filmesRoute);
app.use(cinemasRoute);
app.use(sessoesRoute);



module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

/**
 * App settings.
 */
const app = express();
const port = process.env.APP_PORT || 3000;

/**
 * 3rd party libraries.
 */
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json(bodyParser.urlencoded({ extended: true })));

/**
 * Routes.
 */
app.use(require('./routes'));

/**
 * Start app.
 */
app.listen(port, () => console.log(`App started at http://localhost:${port}`));

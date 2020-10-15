import 'reflect-metadata';
require('dotenv').config();
import express from 'express';

import './database';

import routes from './routes';

const app = express();

app.use(express.json())
app.use(routes);

app.listen(process.env.API_PORT, () => {
  console.log(`API SERVER RUNNING ON API_PORT ${process.env.API_PORT}`)
})
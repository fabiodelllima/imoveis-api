import 'reflect-metadata';
import 'reflect-metadata';
import 'express-async-errors';
import express, { Application, json } from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { routes } from './routers/index.route';

const app: Application = express();

app.use(json());
app.use('/', routes);
app.use(handleErrors);

export default app;

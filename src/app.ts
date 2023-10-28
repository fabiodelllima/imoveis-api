import 'reflect-metadata';
import 'reflect-metadata';
import 'express-async-errors';
import express, { Application, json } from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';

const app: Application = express();

app.use(json());
app.use(handleErrors);

export default app;

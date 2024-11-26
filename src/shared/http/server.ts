import 'reflect-metadata'
import '@shared/typeorm'
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes'
import { errorHandler } from '@shared/errors/errorHandler';
import { errors } from 'celebrate';



const app = express();

app.use(cors())
app.use(express.json());

app.use(routes)

app.use(errors());

app.use(errorHandler);

app.listen(3001, () => console.log('Server running on port 3001'));

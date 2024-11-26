import 'reflect-metadata'
import '@shared/typeorm'
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes'
import AppError from '@shared/errors/AppError'

const erroHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ statusCode: error.statusCode, message: error.message });
  }
  return res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });

}

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes)

app.use(erroHandler);


app.listen(3001, () => console.log('Server running on port 3001'));

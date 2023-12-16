import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import usersRouter from './controllers/users.controller';
import authRouter from './controllers/auth.controller';
import submissionsRouter from './controllers/submissions.controller';
import { errorHandler, extractUser } from './utils/middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(extractUser);

app.use('/api/auth', authRouter);
app.use('/api/submissions', submissionsRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);

export default app;

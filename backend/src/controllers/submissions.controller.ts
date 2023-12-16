/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import submissionsService from '../services/submissions.service';
import { auth } from '../utils/middleware';
import { parseToken } from '../utils/parsers';
import { validateDto } from '../utils/validation';
import CreateSubmissionDto from '../dto/createSubmission.dto';
import createHttpError from 'http-errors';

const submissionsRouter = Router();

submissionsRouter.get('/', async (_req, res, next) => {
  try {
    const submissions = await submissionsService.getAll();
    return res.status(200).json(submissions);
  } catch (e) {
    return next(e);
  }
});

submissionsRouter.get('/:id', async (req, res, next) => {
  try {
    const submission = await submissionsService.getById(req.params.id);
    return res.status(200).json(submission);
  } catch (e) {
    return next(e);
  }
});

submissionsRouter.post('/', auth.required, validateDto(CreateSubmissionDto), async (req, res, next) => {
  try {
    const user = parseToken(res.locals.user);
    const data = req.body as CreateSubmissionDto;  
    const submission = await submissionsService.create(data, user.id);
    return res.status(201).json(submission);
  } catch (e) {
    return next(e);
  }
});

submissionsRouter.delete('/:id', auth.required, async (req, res, next) => {
  try {
    const user = parseToken(res.locals.user);
    const submission = await submissionsService.getById(req.params.id);

    if (submission.userId !== user.id || user.role !== 'ADMIN') {
      throw new createHttpError.Forbidden('You are not allowed to delete this submission');
    }
    
    await submissionsService.deleteById(req.params.id);
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
});

export default submissionsRouter;
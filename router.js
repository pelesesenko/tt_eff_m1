import { Router } from 'express';
import usersRouter from './users/users-router.js';
import historyRouter from './history/history-router.js';

const router = new Router();

router.use(usersRouter);
router.use('/history', historyRouter);

export default router;

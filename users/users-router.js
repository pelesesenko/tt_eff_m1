import { Router } from 'express';
import usersController from './users-controller.js';

const usersRouter = new Router();

usersRouter.get('/', usersController.getAll);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.remove);

export default usersRouter;

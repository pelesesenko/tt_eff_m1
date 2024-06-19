import { Router } from 'express';
import historyController from './history-controller.js';

const historyRouter = new Router();

historyRouter.get('/', historyController.getHistory);

export default historyRouter;

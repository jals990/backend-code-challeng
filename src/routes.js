import Router from 'express';

import JobController from './app/controllers/JobController';
import JobsController from './app/controllers/JobsController';

const routes = new Router();

routes.get('/jobs', JobsController.index);
routes.get('/job', JobController.index);

export default routes;

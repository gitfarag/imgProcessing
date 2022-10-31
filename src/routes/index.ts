import express from 'express';
import imgRouter from './imgRoutes/imgRouter';
import apicache from 'apicache';
const cache = apicache.middleware;

const routes = express.Router();

routes.use('/images', cache('5 minutes'), imgRouter);

export default routes;

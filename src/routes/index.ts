import express from 'express';
import imgRouter from './imgRoutes/imgRouter';
import apicache from 'apicache'


const routes = express.Router();
let cache = apicache.middleware
routes.use('/images', cache('5 minutes'),imgRouter);

export default routes;

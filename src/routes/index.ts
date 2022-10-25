import express, { Request, Response } from 'express';
import imgRouter from './imgRoutes/imgRouter';
const routes = express.Router();

routes.use('/images', imgRouter);
export default routes;

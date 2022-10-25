import { Router } from 'express';
import {
  imgValidator,
  croppedValidator,
} from './../../validator/image.validator';
const imgRouter = Router();

// img original validator
imgRouter.get('/:name', imgValidator);

// cropped image validator
imgRouter.get('/:width/:height/:name', croppedValidator);

export default imgRouter;

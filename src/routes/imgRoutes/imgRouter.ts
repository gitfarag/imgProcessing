import { Router } from 'express';
import getImageByName from '../../controller/getImageByName';
import {
  imgValidator,
  croppedValidator,
} from './../../validator/image.validator';
const imgRouter = Router();

// img original validator
imgRouter.get('/:name', imgValidator, getImageByName);

// cropped image validator
imgRouter.get('/:width/:height/:name', croppedValidator);

export default imgRouter;

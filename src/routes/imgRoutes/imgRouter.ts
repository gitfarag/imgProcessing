import { Router } from 'express';
import { getImageByName, getCroppedByName } from '../../controller';
import { imgValidator } from './../../validator/image.validator';
const imgRouter = Router();

// img original validator
imgRouter.get('/:name', imgValidator, getImageByName);

// cropped image validator
imgRouter.get('/:width/:height/:name', imgValidator, getCroppedByName);

export default imgRouter;

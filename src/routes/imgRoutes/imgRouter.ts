import { Router } from 'express';
import { getImageByName, getCroppedByName } from '../../controller';
import exist from '../../validator/croppedValidtor';
import { imgValidator } from './../../validator/image.validator';
const imgRouter = Router();

// img original validator
imgRouter.get('/:name', imgValidator, getImageByName);

// cropped image validator
imgRouter.get('/scale/:name', exist, imgValidator, getCroppedByName);

export default imgRouter;

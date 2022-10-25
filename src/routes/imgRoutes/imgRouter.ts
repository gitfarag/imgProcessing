import { Router } from 'express';
import {imgValidator,croppedValidator} from './../../validator/image.validator';
const imgRouter = Router();
// img original validator
imgRouter.get('/:name', imgValidator);

// cropped image validator
imgRouter.get('/:name/:width/:height', (req, res) => {
  const name = req.params.name;
  const width = req.params.width;
  const height = req.params.height;
  res.send(console.log(name, width, height)).status(200);
});
export default imgRouter;

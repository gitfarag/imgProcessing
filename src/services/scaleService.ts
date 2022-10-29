import { Request, Response } from 'express';
import Scale from '../models/imgModel';
import crop from '../middlewares/sharpScale';

const scaleInit = (req: Request, res: Response): any => {
  const name = req.params.name;
  const width = parseInt(req.params.width);
  const height = parseInt(req.params.height);
  const scaleModel: Scale = {
    name,
    width,
    height,
  };
  try {
    const scaled = crop(scaleModel);
    return scaled;
  } catch (error) {
    return error;
  }
};

export default scaleInit;

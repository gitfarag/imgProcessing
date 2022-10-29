import { Request, Response } from 'express';
import fs from 'fs';
import scaleInit from '../services/scaleService';

const getCroppedByName = (req: Request, res: Response) => {
  try {
    const scale = scaleInit(req, res);
    const file = fs.readFileSync(scale);
    res.send(file).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};
export default getCroppedByName;

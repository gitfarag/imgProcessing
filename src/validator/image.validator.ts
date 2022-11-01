import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';


const imgValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const name = req.params.name;
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'images',
    `${name}`
  );
  try {
    fs.readFileSync(`${filePath}.jpg`);
    next();
  } catch (error) {
    res.send("images not exists");
  }
};

export { imgValidator };

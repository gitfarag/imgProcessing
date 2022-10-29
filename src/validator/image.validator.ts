import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

//----------Rememer---------//
//    image name with the   //
// extention ex :(img1.jpg) //
//--------------------------//

const imgValidator = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name } = req.params;
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'images',
    `${name}`
  );
  try {
    const file = fs.readFileSync(`${filePath}`);
    next();
  } catch (error) {
    console.log('file not found');
    res.send(error);
  }
};

export { imgValidator };

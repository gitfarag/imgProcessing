import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const exist = (req: Request, res: Response, next: NextFunction): void => {
  const width = req.query.w as unknown as string;
  const height = req.query.h as unknown as string;
  const { name } = req.params;
  const imagePath: string = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'cropped',
    `${width}-${height}-${name}.jpg`
  );
  const exists = fs.existsSync(imagePath);
  if (exists) {
    res
      .send(
        `<img class="logo" src="/cropped/${width}-${height}-${name}.jpg" alt="My_Logo">`
      )
      .status(200);
  } else {
    next();
  }
};

export default exist;

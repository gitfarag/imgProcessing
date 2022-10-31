import { Request, Response } from 'express';
import entryValidate from '../validator/entryValidator';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const getCroppedByName = async (req: Request, res: Response) => {
  const width = req.query.w as unknown as string;
  const height = req.query.h as unknown as string;
  const { name } = req.params;
  const basePath: string = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'images',
    `${name}`
  );

  const validated = await entryValidate(width, height);
  if (validated === 'good entry') {
    await sharp(basePath)
      .resize(parseInt(width), parseInt(height))
      .toFile(`./assets/cropped/${width}-${height}-${name}`);
    const imagePath: string = path.join(
      __dirname,
      '..',
      '..',
      'assets',
      'cropped',
      `${width}-${height}-${name}`
    );
    const sendimage = fs.readFileSync(imagePath);
    res.send(sendimage);
  } else {
    res.send(validated).status(500);
  }
};
export default getCroppedByName;

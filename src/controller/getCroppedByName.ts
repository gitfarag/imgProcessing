import { Request, Response } from 'express';
import entryValidate from '../validator/entryValidator';
import sharp from 'sharp';
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
    `${name}.jpg`
  );

  const validated = await entryValidate(width, height);

  if (validated == 'good entry') {
    await sharp(basePath)
      .resize(parseInt(width), parseInt(height))
      .jpeg()
      .toFile(`./assets/cropped/${width}-${height}-${name}.jpg`);

    // console.log("cropped//////////")
    res
      .send(
        `<img class="logo" src="/cropped/${width}-${height}-${name}.jpg" alt="My_Logo">`
      )
      .status(200);
  } else {
    res.send(validated).status(500);
  }
};
export default getCroppedByName;

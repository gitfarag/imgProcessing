import path from 'path';
import Scale from '../models/imgModel';
import sharp from 'sharp';

const crop = (scale: Scale) => {
  const { name, width, height } = scale;

  const basePath: string = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'images',
    `${name}`
  );
  const croppedPath: string = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'cropped',
    `${width}.${height}.${name}`
  );
  try {
    sharp(basePath)
      .resize(width, height)
      .toFile(`./assets/cropped/${width}.${height}.${name}`);
    return croppedPath;
  } catch (error) {
    return error;
  }
};
export default crop;

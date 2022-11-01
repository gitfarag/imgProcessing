import { Request, Response } from 'express';
const getImageByName = (req: Request, res: Response): void => {
  try {
    const { name } = req.params;
    res
      .send(`<img class="logo" src="/images/${name}.jpg" alt="My_Logo">`)
      .status(200);
    // console.log(filePath)
  } catch (error) {
    res.send(error).status(404);
  }
};
export default getImageByName;

import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const imgValidator = (req: Request, res: Response, next: NextFunction): any => {
  const { name } = req.params;
  const filePath = path.join(__dirname, '..', '..', 'assets', 'images');
  const getFile = fs.existsSync(`${filePath}/${name}`);
  if (getFile) {
    const file = fs.readFileSync(`${filePath}/${name}`)
    res.send(file)
  } else {
    res.status(404).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Udacity Advanced</title>
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            body{
                font-size: 16px;
                height: 100vh;
                background: #e5e5e5;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            h1{
                color: #02b3e4;
            }
        </style>
    </head>
    <body>
        <h1>Udacity Advanced track</h1>
        <h2 >Image Not Found</h2>
    </body>
    </html>`);
  }
  

};
// const croppedValidator = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): any => {
//   const { name } = req.params;
//   const filePath = path.join(__dirname, '..', '..', 'assets', 'images');
//   const getFile = fs.existsSync(`${filePath}/${name}`);
//   getFile ? next() : '';
// };
export default imgValidator;

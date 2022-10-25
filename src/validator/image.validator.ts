import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

//--------- Rememer---------//
//    image name with the   //
// extention ex :(img1.jpg) //
//--------------------------//

const imgValidator = (req: Request, res: Response,): void => {
  const { name } = req.params;
  const filePath = path.join(__dirname,'..','..','assets','images',`${name}`);
  const getFile = fs.existsSync(`${filePath}`);
  if (getFile) {
    const file = fs.readFileSync(`${filePath}`);
    res.status(200).send(file);
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
  const croppedValidator = (req:Request, res:Response):void => {
  const name = req.params.name;
  const width = req.params.width;
  const height = req.params.height ;
  const filePath = path.join(__dirname,'..','..','assets','cropped',`${width}${height}${name}`);
  const getFile = fs.existsSync(`${filePath}`);

  if (getFile) {
    res.status(500).send(`<!DOCTYPE html>
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
        <h2 >Image already existed</h2>
    </body>
    </html>`);
  } else  {
    const originalImg=path.join(__dirname,'..','..','assets','images',`${name}`);
    console.log(originalImg)
    console.log(width,height)
    sharp(originalImg)
    .resize(parseInt(width),parseInt(height))
    .toFile(`./assets/cropped/${width}${height}${name}`)
    
    res.status(200).send("crpping img")
    console.log(Date.now())
  } 

};
export  {imgValidator,croppedValidator};

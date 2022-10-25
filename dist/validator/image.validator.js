"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.croppedValidator = exports.imgValidator = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
//----------Rememer---------//
//    image name with the   //
// extention ex :(img1.jpg) //
//--------------------------//
const imgValidator = (req, res) => {
    const { name } = req.params;
    const filePath = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `${name}`);
    const getFile = fs_1.default.existsSync(`${filePath}`);
    if (getFile) {
        const file = fs_1.default.readFileSync(`${filePath}`);
        res.status(200).send(file);
    }
    else {
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
exports.imgValidator = imgValidator;
const croppedValidator = (req, res) => {
    const name = req.params.name;
    const width = req.params.width;
    const height = req.params.height;
    const filePath = path_1.default.join(__dirname, '..', '..', 'assets', 'cropped', `${width}${height}${name}`);
    const getFile = fs_1.default.existsSync(`${filePath}`);
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
    }
    else {
        const originalImg = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `${name}`);
        console.log(originalImg);
        console.log(width, height);
        (0, sharp_1.default)(originalImg)
            .resize(parseInt(width), parseInt(height))
            .toFile(`./assets/cropped/${width}${height}${name}`);
        res.status(201).send('img cropped successfully');
        console.log(Date.now());
    }
};
exports.croppedValidator = croppedValidator;

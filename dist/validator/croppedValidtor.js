"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exist = (req, res, next) => {
    const width = req.query.w;
    const height = req.query.h;
    const { name } = req.params;
    const imagePath = path_1.default.join(__dirname, '..', '..', 'assets', 'cropped', `${width}-${height}-${name}.jpg`);
    const exists = fs_1.default.existsSync(imagePath);
    if (exists) {
        res
            .send(`<img class="logo" src="/cropped/${width}-${height}-${name}.jpg" alt="My_Logo">`)
            .status(200);
    }
    else {
        next();
    }
};
exports.default = exist;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgValidator = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imgValidator = (req, res, next) => {
    const name = req.params.name;
    const filePath = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `${name}`);
    try {
        fs_1.default.readFileSync(`${filePath}.jpg`);
        next();
    }
    catch (error) {
        res.send("images not exists");
    }
};
exports.imgValidator = imgValidator;

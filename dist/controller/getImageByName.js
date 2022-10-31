"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getImageByName = (req, res) => {
    try {
        const { name } = req.params;
        const filePath = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `${name}`);
        const file = fs_1.default.readFileSync(filePath);
        res.send(file).status(201);
    }
    catch (error) {
        res.send(error).status(404);
    }
};
exports.default = getImageByName;

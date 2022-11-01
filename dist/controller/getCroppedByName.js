"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entryValidator_1 = __importDefault(require("../validator/entryValidator"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const getCroppedByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const width = req.query.w;
    const height = req.query.h;
    const { name } = req.params;
    const basePath = path_1.default.join(__dirname, '..', '..', 'assets', 'images', `${name}.jpg`);
    const validated = yield (0, entryValidator_1.default)(width, height);
    if (validated == "good entry") {
        yield (0, sharp_1.default)(basePath)
            .resize(parseInt(width), parseInt(height))
            .jpeg()
            .toFile(`./assets/cropped/${width}-${height}-${name}.jpg`);
        // console.log("cropped//////////")
        res.send(`<img class="logo" src="/cropped/${width}-${height}-${name}.jpg" alt="My_Logo">`).status(200);
    }
    else {
        res.send(validated).status(500);
    }
});
exports.default = getCroppedByName;

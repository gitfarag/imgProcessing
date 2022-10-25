"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_validator_1 = require("./../../validator/image.validator");
const imgRouter = (0, express_1.Router)();
// img original validator
imgRouter.get('/:name', image_validator_1.imgValidator);
// cropped image validator
imgRouter.get('/:width/:height/:name', image_validator_1.croppedValidator);
exports.default = imgRouter;

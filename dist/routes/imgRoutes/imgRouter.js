"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../controller");
const image_validator_1 = require("./../../validator/image.validator");
const imgRouter = (0, express_1.Router)();
// img original validator
imgRouter.get('/:name', image_validator_1.imgValidator, controller_1.getImageByName);
// cropped image validator
imgRouter.get('/scale/:name', image_validator_1.imgValidator, controller_1.getCroppedByName);
exports.default = imgRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imgRouter_1 = __importDefault(require("./imgRoutes/imgRouter"));
const apicache_1 = __importDefault(require("apicache"));
const cache = apicache_1.default.middleware;
const routes = express_1.default.Router();
routes.use('/images', cache('5 minutes'), imgRouter_1.default);
exports.default = routes;

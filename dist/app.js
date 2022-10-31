"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = __importDefault(require("./middlewares/logger"));
dotenv_1.default.config();
const port = process.env.APP_PORT;
const name = process.env.APP_NAME;
const app = (0, express_1.default)();
// middleWares
app.use((0, cors_1.default)(), (0, helmet_1.default)(), logger_1.default);
// static-files
app.use(express_1.default.static('frontend'));
// Routes and Endpoint
app.use('/api-rest', routes_1.default);
// start server
app.listen(port, () => {
    console.log(`${name} is running on: http://localhost:${port}`);
});
exports.default = app;

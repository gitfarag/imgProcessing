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
dotenv_1.default.config();
const port = process.env.APP_PORT;
const name = process.env.APP_NAME;
const app = (0, express_1.default)();
// middleWares
app.use((0, cors_1.default)(), (0, helmet_1.default)());
// static-files
app.use(express_1.default.static('frontend'));
// Routes and Endpoint
app.use('/api-rest', routes_1.default);
// 404 eroor page
app.use((req, res) => {
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
      <h2 >404 page not found</h2>
  </body>
  </html>`);
});
// start server
app.listen(port, () => {
    console.log(`${name} is running on: http://localhost:${port}`);
});
exports.default = app;

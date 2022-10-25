import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const port = process.env.APP_PORT;
const name = process.env.APP_NAME;
const app: Application = express();
// middleWares
app.use(cors(), helmet());

// static-files
app.use(express.static('frontend'));

app.use('/api-rest', routes);

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
export default app;

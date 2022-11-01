import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './routes';
import logger from './middlewares/logger';

dotenv.config();
const port = process.env.APP_PORT;
const name = process.env.APP_NAME;
const app: Application = express();

// middleWares
app.use(cors(), helmet(), logger);

// static-files
app.use(express.static('frontend'));

// Routes and Endpoint

app.use('/api-rest', routes);

// static to render the image in the browser
app.use(express.static(__dirname + '/../assets'));

// start server
app.listen(port, () => {
  console.log(`${name} is running on: http://localhost:${port}`);
});
export default app;

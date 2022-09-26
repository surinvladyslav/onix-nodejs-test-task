import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
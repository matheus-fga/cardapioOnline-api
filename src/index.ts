import express from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';

import errorHandler from './app/middlewares/errorHandler';
import { router } from './routes';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);
    app.use(errorHandler);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  })
  .catch((error) => console.log(error));



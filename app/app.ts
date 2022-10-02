import express from 'express';
import morgan from 'morgan';

import config from '../config/index.js';
import routes from './router/index.js';

const app = express();

interface Application {
  app: {
    listen: Function,
  },
}

class Application {
  constructor () {
    app.use(express.json())
      .use(morgan('dev'))
      .use('/api', routes);
    this.app = app;
  }

  async start (port?: String | undefined) {
    process.on('uncaughtException', (err) => console.error('Top-Level exception', err, err.stack));

    return new Promise((resolve: Function, reject: Function) => {
      this.app.listen(port, async (err: Object) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.info(`Server listening on port: ${port}`);
        resolve();
      });
    });
  }
}

(async () => await new Application().start(config.port))();


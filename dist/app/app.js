var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import morgan from 'morgan';
import config from '../config/index.js';
import routes from './router/index.js';
const app = express();
class Application {
    constructor() {
        app.use(express.json())
            .use(morgan('dev'))
            .use('/api', routes);
        this.app = app;
    }
    start(port) {
        return __awaiter(this, void 0, void 0, function* () {
            process.on('uncaughtException', (err) => console.error('Top-Level exception', err, err.stack));
            return new Promise((resolve, reject) => {
                this.app.listen(port, (err) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    console.info(`Server listening on port: ${port}`);
                    resolve();
                }));
            });
        });
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () { return yield new Application().start(config.port); }))();

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
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
// Health check
router.get('/v1/healthcheck', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).send('<img src ="https://http.cat/200"/>'); }));
// Automatically load all 'routes.js' files found under their respective component folders
const getDirectories = (path) => fs.readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((dir) => dir.name);
const basePath = path.join(dirname, '../components');
const cleanDirectories = getDirectories(basePath);
cleanDirectories.forEach((componentName) => {
    const routesPath = `${basePath}/${componentName}/routes.js`;
    if (fs.existsSync(routesPath))
        import(routesPath);
});
export default router;

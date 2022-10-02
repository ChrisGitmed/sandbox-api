import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Health check
router.get('/v1/healthcheck', async (req, res) => res.status(200).send('<img src ="https://http.cat/200"/>'));

// Automatically load all 'routes.js' files found under their respective component folders
const getDirectories = (path) => fs.readdirSync(path, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((dir) => dir.name);

const basePath = path.join(dirname, '../components');
const cleanDirectories = getDirectories(basePath);

cleanDirectories.forEach((componentName) => {
  const routesPath = `${basePath}/${componentName}/routes.js`;
  if (fs.existsSync(routesPath)) import(routesPath);
});

export default router;


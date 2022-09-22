import express from 'express';

const router = express.Router();

// Health check
router.get('/v1/healthcheck', async (req, res) => res.status(200).send('<img src ="https://http.cat/200"/>'));

export default router;


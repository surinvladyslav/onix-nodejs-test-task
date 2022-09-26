import express from 'express';

import controller from  '../controllers/index.js';

const router = express.Router();

router.get('/rates', controller.getPriceUsd);

export default router;
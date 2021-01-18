import express from 'express';
import {
  helloController,
  challengeController,
} from '../controllers/index';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/challenge', challengeController.get);

export default router;

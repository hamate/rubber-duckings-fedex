import express from 'express';
import {
  helloController,
  challengeController,
  registerController,
  loginController,
  commitmentsController,
} from '../controllers/index';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/challenge', challengeController.get);
router.post('/register', registerController.post);
router.post('/login', loginController.post);
router.get('/commitments', commitmentsController.getAll);

export default router;

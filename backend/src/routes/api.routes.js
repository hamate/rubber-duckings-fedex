import express from 'express';
import {
  helloController,
  challengeController,
  registerController,
  loginController,
  commitmentsController,
} from '../controllers/index';
import authHandler from '../middlewares/authHandler';

const cors = require('cors');

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/hello', helloController.get);
router.get('/challenge', challengeController.get);
router.post('/register', registerController.post);
router.post('/login', loginController.post);

router.use(authHandler);

router.get('/commitments', commitmentsController.getAll);
router.delete('/commitments', commitmentsController.delete);
router.delete('/commitments/:commitmentName', commitmentsController.deleteGroup);
router.post('/commitments', commitmentsController.post);
router.put('/commitments', commitmentsController.put);

export default router;

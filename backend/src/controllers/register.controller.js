import { registerService } from '../services';

export const registerController = {
  async post(req, res, next) {
    const { username, password, email } = req.body;
    try {
      const token = await registerService.insertNewUser(username, password, email);
      res.status(200).json(token);
    } catch (err) {
      next(err);
    }
  },
};

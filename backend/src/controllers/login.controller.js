import { loginService } from '../services';

export const loginController = {
  async post(req, res, next) {
    const { password, username } = req.body;
    try {
      const token = await loginService.loginUser(username, password);
      res.status(200).json({ status: 'ok', token });
    } catch (err) {
      next(err);
    }
  },
};

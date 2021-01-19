import { challengeService } from '../services';

export const challengeController = {
  async get(req, res, next) {
    try {
      const challengeData = await challengeService.getChallenge();
      res.status(200).json(challengeData);
    } catch (err) {
      next(err);
    }
  },
};

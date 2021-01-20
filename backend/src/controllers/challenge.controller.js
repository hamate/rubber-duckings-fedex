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

  async post(req, res, next) {
    const { challengeDetails } = req.body;
    try {
      const challengeData = await challengeService.postChallenge(
        challengeDetails,
      );
      res.status(200).json(challengeData);
    } catch (err) {
      next(err);
    }
  },

  async put(req, res, next) {
    const { challengeDetails } = req.body;
    try {
      const challengeData = await challengeService.putChallenge(
        challengeDetails,
      );
      res.status(200).json(challengeData);
    } catch (err) {
      next(err);
    }
  },
};

import { commitmentsService } from '../services';

export const commitmentsController = {
  async getAll(req, res, next) {
    const commitments = await commitmentsService.getCommitments();
    try {
      res.status(200).json(commitments);
    } catch (err) {
      next(err);
    }
  },
};

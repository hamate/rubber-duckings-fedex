import { commitmentsRepo } from '../repositories';

export const commitmentsService = {
  async getCommitments() {
    const commitments = await commitmentsRepo.getCommitments();
    const formattedCommitments = commitments.map((commitment) => ({
      id: commitment.id,
      name: commitment.name,
      userId: commitment.user_id,
      startDate: commitment.start_date,
      endDate: commitment.end_date,
      isDone: Boolean(commitment.is_done),
    }));
    return formattedCommitments;
  },
  async addCommitment(commitment) {
    const queryData = await commitmentsRepo.addCommitment(commitment);
    const newCommitment = await commitmentsRepo.getCommitment(queryData.results.insertId);
    return {
      id: newCommitment.id,
      name: newCommitment.name,
      userId: newCommitment.user_id,
      startDate: newCommitment.start_date,
      endDate: newCommitment.end_date,
      isDone: Boolean(newCommitment.is_done),
    };
  },
  async removeCommitment(id) {
    await commitmentsRepo.removeCommitment(id);
    return {
      message: 'Commitment removed',
    };
  },
  async removeCommitmentGroup(commitmentName, userId) {
    await commitmentsRepo.removeCommitmentGroup(commitmentName, userId);
    return {
      message: 'Commitments removed',
    };
  },
};

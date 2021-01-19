import { db } from '../data/connection';

export const commitmentsRepo = {
  async getCommitments() {
    const sqlQuery = 'SELECT * FROM commitments';
    try {
      const queryData = await db.query(sqlQuery);
      return queryData.results;
    } catch (err) {
      throw {
        status: 500,
        message: err.sqlMessage,
      };
    }
  },
  async addCommitment(commitment) {
    const {
      userId,
      name,
      startDate,
      endDate,
    } = commitment;
    const sqlQuery = 'INSERT INTO commitments (name, start_date, end_date, user_id) VALUES (?,?,?,?)';
    try {
      return await db.query(sqlQuery, [name, startDate, endDate, userId]);
    } catch (err) {
      throw {
        status: 500,
        message: err.sqlMessage,
      };
    }
  },
  async getCommitment(id) {
    const sqlQuery = 'SELECT * FROM commitments WHERE id = ?';
    try {
      const queryData = db.query(sqlQuery, id);
      return queryData.results[0];
    } catch (err) {
      throw {
        status: 500,
        message: err.sqlMessage,
      };
    }
  },
  async removeCommitment(id) {
    const sqlQuery = 'DELETE FROM commitments WHERE id = ?';
    try {
      return await db.query(sqlQuery, id);
    } catch (err) {
      throw {
        status: 500,
        message: err.sqlMessage,
      };
    }
  },
  async removeCommitmentGroup(commitmentName, userId) {
    const sqlQuery = 'DELETE FROM commitments WHERE name = ? AND user_id = ?';
    try {
      return await db.query(sqlQuery, [commitmentName, userId]);
    } catch (err) {
      throw {
        status: 500,
        message: err.sqlMessage,
      };
    }
  },
};

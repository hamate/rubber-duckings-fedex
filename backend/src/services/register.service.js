import bcrypt from 'bcrypt';
import { usersRepo } from '../repositories';
import { loginService } from './login.service';

export const registerService = {
  validateUsernameAndPassword(username, password, email) {
    if (!username || !password || !email) {
      throw {
        status: 400,
        message: 'Missing username, email and/or password',
      };
    }
    if (password.length < 8) {
      throw {
        status: 401,
        message: 'Password must be at least 8 characters',
      };
    }
  },
  async hashUserPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  },
  async insertNewUser(username, password, email) {
    this.validateUsernameAndPassword(username, password, email);
    const hashedPassword = await this.hashUserPassword(password);
    await usersRepo.insertUser(username, hashedPassword, email);
    const token = loginService.getToken(username);
    return token;
  },
};

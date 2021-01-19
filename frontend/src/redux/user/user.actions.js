import userActionTypes from './user.types';

export const setUser = (userId, isAdmin, isValidated) => ({
  type: userActionTypes.SET_USER,
  payload: { userId, isAdmin, isValidated }
});
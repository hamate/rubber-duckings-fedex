import SessionActionTypes from './session.types';

export const setCurrentUser = token => ({
  type: SessionActionTypes.SET_SESSION,
  payload: token,
});
import SessionActionTypes from './session.types';

export const setCurrentUser = token => ({
  type: SessionActionTypes.SET_TOKEN,
  payload: token,
});
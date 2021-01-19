import SessionActionTypes from './session.types';

const INTITAL_STATE = {
  token: null,
  userId: null,
};

const sessionReducer = (state = INTITAL_STATE, action) => {
  switch (action.type) {
    case SessionActionTypes.SET_SESSION:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,

      };
    default: 
      return state;
  }
};

export default sessionReducer;
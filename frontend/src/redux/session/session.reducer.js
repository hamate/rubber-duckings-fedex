import SessionActionTypes from './session.types';

const INTITAL_STATE = {
  token: null
};

const sessionReducer = (state = INTITAL_STATE, action) => {
  switch (action.type) {
    case SessionActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default: 
      return state;
  }
};

export default sessionReducer;
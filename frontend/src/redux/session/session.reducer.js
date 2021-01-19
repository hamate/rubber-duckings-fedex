import SessionActionTypes from './session.types';

const INTITAL_STATE = {
  sessionLoading: false,
  token: null,
  userId: null,
  isAdmin: false,
  sessionError: "",
};

const sessionReducer = (state = INTITAL_STATE, action) => {
  switch (action.type) {
    case SessionActionTypes.SESSION_LOADING:
      return {
        ...state,
        sessionLoading: true,
      };
      case SessionActionTypes.SESSION_SUCCESS:
        return {
          ...state,
          token: action.payload.token,
          userId: action.payload.userId,
          isAdmin: action.payload.isAdmin
        }
        case SessionActionTypes.SESSION_FAILED:
          return {
            ...state,
            sessionError: action.message
          }
    default: 
      return state;
  }
};

export default sessionReducer;
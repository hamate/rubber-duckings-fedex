import userActionTypes from './user.types';

const initialState = {
  userId: null,
  isAdmin: false,
  isValidated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        userId: action.payload.userId,
        isAdmin: action.payload.isAdmin,
        isValidated: action.payload.isValidated,
      };
    default:
      return state;
  }
};

export default userReducer;

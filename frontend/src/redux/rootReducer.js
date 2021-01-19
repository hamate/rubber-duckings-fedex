import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from './session/session.reducer';
import challengeReducer from './challenge/challenge.reducer';
import commitmentsReducer from './commitments/commitments.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session', 'user', 'challenge']
};

const rootReducer = combineReducers({
  session: sessionReducer,
  challenge: challengeReducer,
  commitments: commitmentsReducer,
  user: userReducer,
});


export default persistReducer(persistConfig, rootReducer)
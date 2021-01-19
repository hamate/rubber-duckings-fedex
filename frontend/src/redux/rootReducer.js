import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from './session/session.reducer';
<<<<<<< HEAD
import challengeReducer from './challenge/challenge.reducer';
=======
import commitmentsReducer from './commitments/commitments.reducer';
>>>>>>> e6a30c2... started working on commitments backend

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session']
};

const rootReducer = combineReducers({
  session: sessionReducer,
<<<<<<< HEAD
  challenge: challengeReducer,
=======
  commitments: commitmentsReducer,
>>>>>>> e6a30c2... started working on commitments backend
});


export default persistReducer(persistConfig, rootReducer)
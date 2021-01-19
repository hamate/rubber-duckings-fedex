import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from './session/session.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session']
};

const rootReducer = combineReducers({
  session: sessionReducer,
});


export default persistReducer(persistConfig, rootReducer)
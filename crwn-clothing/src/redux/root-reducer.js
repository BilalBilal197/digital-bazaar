import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// can import local storage as storage or session storage as sessionStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// at what point do we wanna store the state is determine by persistConfig
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'] // contains string names of any reducers we wanna persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

// exporting a modified version of our root reducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);

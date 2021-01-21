import { combineReducers } from 'redux';

import authReducer from 'store/auth';
import pizzaReducer from 'store/pizza';

export default combineReducers({
  auth: authReducer,
  pizza: pizzaReducer,
});

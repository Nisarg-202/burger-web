import {combineReducers} from 'redux';

import AuthenticateReducer from './AuthenticateReducer';
import AmountReducer from './AmountReducer';
import SaladReducer from './SaladReducer';
import BaconReducer from './BaconReducer';
import CheeseReducer from './CheeseReducer';
import MeatReducer from './MeatReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
  orders: OrdersReducer,
  auth: AuthenticateReducer,
  amount: AmountReducer,
  salad: SaladReducer,
  meat: MeatReducer,
  cheese: CheeseReducer,
  bacon: BaconReducer,
});

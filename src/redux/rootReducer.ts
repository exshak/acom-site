import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer'
import userReducer from './user/userReducer'

export default combineReducers({
  user: userReducer,
  // @ts-ignore
  cart: cartReducer
})

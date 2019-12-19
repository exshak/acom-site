import CartActionTypes from './cartTypes'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item: any) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

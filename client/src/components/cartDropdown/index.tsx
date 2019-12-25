import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import CartItem from '../cartItem'
import Button from '../common/button'
import './styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }: any) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem: any) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

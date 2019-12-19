import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cartItem'
import Button from '../common/button'
import './styles.scss'

const CartDropdown = ({ cartItems }: any) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem: any) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }: any) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)

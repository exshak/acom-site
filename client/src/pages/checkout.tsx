import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../components/checkoutItem'
import StripeButton from '../components/common/button/stripe'
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors'
import './styles.scss'

const CheckoutPage = ({ cartItems, total }: any) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem: any) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      Test Card: 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)

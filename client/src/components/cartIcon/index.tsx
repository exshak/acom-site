import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import './styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }: any) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

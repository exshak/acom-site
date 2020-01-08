import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import Button from '../common/button'
import './styles.scss'

const ShopItem = ({ item, addItem }: any) => {
  const { name, price, imageUrl } = item

  return (
    <div className='shop-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='shop-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        Add to cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem)

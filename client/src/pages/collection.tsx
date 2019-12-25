import React from 'react'
import { connect } from 'react-redux'
import ShopItem from '../components/shopItem'
import { selectCollection } from '../redux/shop/shopSelectors'
import './styles.scss'

const CollectionPage = ({ collection }: any) => {
  const { title, items } = collection

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item: any) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

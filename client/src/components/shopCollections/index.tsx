import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'
import ShopView from '../shopView'
import './styles.scss'

const ShopCollections = ({ collections }: any) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }: any) => (
      <ShopView key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(ShopCollections)

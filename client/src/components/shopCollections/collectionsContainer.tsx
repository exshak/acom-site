import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors'
import WithSpinner from '../common/spinner/withSpinner'
import ShopCollections from './index'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const ShopCollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopCollections)

export default ShopCollectionsContainer

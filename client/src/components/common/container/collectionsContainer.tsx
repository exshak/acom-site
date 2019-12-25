import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../../redux/shop/shopSelectors'
import CollectionsOverview from '../../collectionsOverview/index'
import WithSpinner from '../spinner/withSpinner'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

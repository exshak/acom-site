import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../../redux/shop/shopSelectors'
import CollectionsOverview from '../../collectionsOverview/index'
import Spinner from '../spinner'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

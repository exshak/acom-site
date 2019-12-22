import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import CollectionPage from '../../../pages/collection'
import { selectIsCollectionsLoaded } from '../../../redux/shop/shopSelectors'
import Spinner from '../spinner'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage)

export default CollectionPageContainer
